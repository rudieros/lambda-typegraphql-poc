import 'reflect-metadata'
import 'source-map-support/register'
import './_common/database/db'
import { buildSchemaSync, ResolverData } from 'type-graphql'
import { ApolloServer } from 'apollo-server-lambda'
import { authChecker } from './_common/authorization/authChecker'
import { Container } from 'typedi'
import { OSContextType } from './context'
import { setupContainer } from './container'
import * as path from 'path'
import { resolvers } from './resolvers'
import express from 'express'
import awsServerlessExpress from 'aws-serverless-express'

export const schema = buildSchemaSync({
  resolvers,
  authChecker,
  container: ({ context }: ResolverData<OSContextType>) => {
    const container = context.container
    setupContainer(container, context)
    return container
  },
})

export const server = new ApolloServer({
  schema,
  context: (input) => {
    const requestId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) // TODO fetch from lambda event
    const container = Container.of(requestId)
    const context = { requestId, container }
    return context
  },
  formatResponse: (response: any, { context }: ResolverData<any>) => {
    // remember to dispose the scoped container to prevent memory leaks
    Container.reset(context.requestId)
    return response
  },
})

// Express app for graphiql
const app = express()
app.use('/graphiql', (req, res) => {
  res.sendFile(path.join(process.cwd() + '/src/graphiql.html'))
})

const graphiqlServer = awsServerlessExpress.createServer(app)

export const graphql = (e, context, calllback) => {
  console.log('Here man!', e.path)
  if (e.path === '/graphql') {
    server.createHandler({
      cors: {
        origin: '*',
        methods: '*',
        allowedHeaders: '*',
      },
    })(e, context, calllback)
  } else if (e.path === '/graphiql') {
    awsServerlessExpress.proxy(graphiqlServer, e, context)
  }
}
