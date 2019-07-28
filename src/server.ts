import 'reflect-metadata'
import 'source-map-support/register'
import './_common/database/db'
import { buildSchemaSync } from 'type-graphql'
import { ApolloServer, Config } from 'apollo-server-lambda'
import { RecipeResolver } from './recipes/presentation/RecipeResolver'
import { UserResolver } from './users/presentation/User.resolver'

export const schema = buildSchemaSync({
  resolvers: [
    RecipeResolver,
    UserResolver,
  ],
})

export const serverConfig: Config = {
  schema,
  playground: true,
  context: () => {
    return {
      dude: true,
    }
  }
}

const server = new ApolloServer(serverConfig)

export const graphql = server.createHandler({
  cors: {
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  },
})
