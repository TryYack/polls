// next.conf.js
const path = require('path');
const withOffline = require('next-offline');

require('dotenv').config({
  path: path.resolve(
    __dirname,
    `.env`,
  ),
});

module.exports = withOffline({
  env: {
    GRAPHQL_WEBSOCKET: process.env.GRAPHQL_WEBSOCKET,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    APP_TOKEN: process.env.APP_TOKEN,
  }
});
