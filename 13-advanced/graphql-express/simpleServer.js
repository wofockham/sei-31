const express = require('express');
const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');

// Schema
const schema = buildSchema(`
  type Query {
    message: String,
    luckyNumber: Float
  }
`);

// Root resolver
const root = {
  message: () => 'Hello World',
  luckyNumber: () => Math.random()
};

const server = express();
server.use('/graphql', expressGraphql({
  schema,
  rootValue: root,
  graphiql: true
}));

server.listen(4000, () => console.log('http://localhost:4000/graphql'));
