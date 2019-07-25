import 'reflect-metadata'
import 'source-map-support/register'
import './_common/database/db'
import { buildSchemaSync } from 'type-graphql'
import { ApolloServer } from 'apollo-server-lambda'
import { RecipeResolver } from './recipes/presentation/RecipeResolver'
import { UserResolver } from './users/presentation/UserResolver'

const schema = buildSchemaSync({
  resolvers: [
    RecipeResolver,
    UserResolver,
  ],
})

const server = new ApolloServer({
  schema,
  playground: true,
  context: () => {
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
