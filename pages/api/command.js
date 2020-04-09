import Cors from 'cors'
import moment from 'moment'

/**
 * Template for a POST call
 */

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
  const options = commandQueryParts.splice(2, (commandQueryParts.length - 1))
  const expiry = moment().add(1, 'months').toDate()

  // Rest of the API logic
  res.json({ userId, token, title, description, options })
} catch (e) {
  console.log(e)
  res.json({ error: true })
}
}

export default handler
