import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import ws from 'ws'
var WebSocketClient = require('websocket').client

const wsLink = new WebSocketLink({
  uri: process.env.GRAPHQL_WEBSOCKET,
  options: {
    reconnect: true,
    connectionParams: () => {
      return {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      }
    },
  },
  webSocketImpl: WebSocketClient
})

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_ENDPOINT,
  credentials: 'include',
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
  },
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
)

const config = { link }

export default withData(config)
