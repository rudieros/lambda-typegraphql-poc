import 'reflect-metadata'
import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import { buildSchema, buildSchemaSync } from 'type-graphql'
import { RecipeResolver } from './recipes/presentation/Recipe'
import { graphqlLambda } from 'apollo-server-lambda/dist/lambdaApollo'
import { ApolloServer } from 'apollo-server-lambda'
import { MetadataStorage } from 'type-graphql/dist/metadata/metadata-storage'
import { getMetadataStorage } from 'type-graphql/dist/metadata/getMetadataStorage'

// export const graphql: APIGatewayProxyHandler = async (event, context, callback) => {
//   const schema = await buildSchema({
//     resolvers: [RecipeResolver],
//   })
//   ApolloServer
//
//   function callbackWithHeaders(error, output) {
//     output.headers['Access-Control-Allow-Origin'] = '*'
//     callback(error, output)
//   }
//
//   const handler = graphqlLambda({ schema })
//   return handler(event, context, callbackWithHeaders)
// }
// getMetadataStorage().clear()

const schema = buildSchemaSync({
  resolvers: [RecipeResolver],
})

const server = new ApolloServer({
  schema,
  playground: true
})

export const graphql = server.createHandler({
  cors: {
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  },
})
