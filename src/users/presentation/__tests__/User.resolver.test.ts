import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing'
import { ApolloServerBase } from 'apollo-server-core'
import { serverConfig } from '../../../server'

let { query, mutate }: ApolloServerTestClient = createTestClient(serverConfig as any)

describe('UserResolver', () => {
  describe('Queries', async () => {
    const result = await query({ query: `
    {
      
    }
    ` })
  })
  describe('Mutations', () => {

  })
  describe('FieldResolvers', () => {

  })
})
