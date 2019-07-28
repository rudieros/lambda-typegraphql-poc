import 'reflect-metadata'
import 'source-map-support/register'
import './_common/database/db'
import { buildSchemaSync } from 'type-graphql'
import { ApolloServer } from 'apollo-server-lambda'
import { UserResolver } from './users/presentation/User.resolver'
import { authChecker } from './_common/authorization/authChecker'

export const schema = buildSchemaSync({
  resolvers: [
    UserResolver,
  ],
  authChecker,
})

export const server = new ApolloServer({
  schema,
  context: (input) => {
    return {
      dude: true,
    }
  }
})

export const graphql = server.createHandler({
  cors: {
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  },
})
