import Cors from 'cors'
import moment from 'moment'
import axios from 'axios'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  try {
    // Run the middleware
    // To allow CORS
    await runMiddleware(req, res, cors)

    // Set these up - token here is the channelToken
    const { body, query } = req
    const { userId, token } = query
    const channelToken = token
    const { userCommand: { commandName, commandQuery } } = body
    const commandQueryParts = commandQuery.split(',')
    const title = commandQueryParts[0]
    const message = 'Here is a poll'
    const attachments = []
    const description = commandQueryParts[1]
    const expiry = moment().add(1, 'months').format('YYYY-MM-DD 00:00:00')

    // Create an options data object that will be compatible with the DB
    // ... which is just plain JSON
    const options = commandQueryParts
      .splice(2, (commandQueryParts.length - 1))
      .map((option, index) => {
        return {
          id: index,
          text: option,
        }
      })

    // Make a manual GRaphQL request
    // Bit of a hack - but saves having to jump through the GQL-via-server hoops
    // Just to get 1 call going
    const poll = await axios({
      url: 'https://yack-apps.herokuapp.com/v1/graphql',
      method: 'post',
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
      },
      data: {
        "operationName": "add_poll",
        "variables": {
          "objects": [
            {
              "title": title,
              "description": description,
              "options": options,
              "expiry": expiry,
              "channel_token": channelToken,
              "user_id": userId
            }
          ]
        },
        "query": `
          mutation add_poll($objects: [polls_insert_input!]!) {
            insert_polls(objects: $objects) {
              returning {
                id
                title
                __typename
              }
              __typename
            }
          }
        `
      }
    })

    // We just need the ID really - TODO: make failure less likely here
    const { id } = poll.data.data.insert_polls.returning[0]
    const resourceId = id

    // Here we recreate the DEvKit functionality
    // TODO: Add NodeJS support for DevKit & isomorphic FETCH
    // All this is less than ideal
    const WEBHOOK_URL = process.env.NODE_ENV == 'development'
      ? 'http://localhost:8181/v1/webhook'
      : 'https://api.yack.co/v1/webhook'

    // App token is manually set from the appstore
    const appToken = process.env.APP_TOKEN

    // Make the request manually
    // We usualll use DevKit for this
    // But we need to do it on the server side
    await axios({
      url: `${WEBHOOK_URL}/${channelToken}`,
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "bearer " + appToken,
      },
      data: JSON.stringify({ body: message, attachments, resourceId, userId })
    })

    // All is good
    res.json({ success: true })
  } catch (e) {
    res.json({ error: e })
  }
}

export default handler
