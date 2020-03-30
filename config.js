import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import ws from 'ws'
var WebSocketClient = require('websocket').client

const wsLink = new WebSocketLink({
  uri: `ws://yack-apps.herokuapp.com/v1/graphql`,
  options: {
    reconnect: true
  },
  webSocketImpl: WebSocketClient
})

const httpLink = new HttpLink({
  uri: 'http://yack-apps.herokuapp.com/v1/graphql',
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
