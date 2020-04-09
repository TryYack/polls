import Cors from 'cors'
import moment from 'moment'
import axios from 'axios'
import { createChannelMessage } from '@tryyack/dev-kit'

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
  await runMiddleware(req, res, cors)

  const { body, query } = req
  const { userId, token } = query
  const channelToken = token
  const { userCommand: { commandName, commandQuery } } = body
  const commandQueryParts = commandQuery.split(',')
  const title = commandQueryParts[0]
  const message = 'Here is a poll'
  const attachments = null
  const description = commandQueryParts[1]
  const expiry = moment().add(1, 'months').format('YYYY-MM-DD 00:00:00')
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
  const poll = await axios({
    url: 'https://yack-apps.herokuapp.com/v1/graphql',
    method: 'post',
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
  const WEBHOOK_URL = "http://localhost:8181/v1/webhook"
  const appToken = 'd91c6fcd-2c59-4200-9919-c1a52ed1ee3d'

  // Make the request
  await axios({
    url: `${WEBHOOK_URL}/${channelToken}`,
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "bearer " + appToken,
    },
    data: JSON.stringify({ message, attachments, resourceId })
  })

  // All is good
  res.json({ success: true })
} catch (e) {
  console.log(e)
  res.json({ error: e })
}
}

export default handler
