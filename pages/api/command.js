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
  await runMiddleware(req, res, cors)

  const { body, query } = req
  const { userId, token } = query
  const { userCommand: { commandName, commandQuery } } = body
  const commandQueryParts = commandQuery.split(',')
  const title = commandQueryParts[0]
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
  await axios({
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
            "channel_token": token,
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
  console.log(poll)

  // Rest of the API logic
  res.json({ success: true })
} catch (e) {
  console.log(e)
  res.json({ error: true })
}
}

export default handler
