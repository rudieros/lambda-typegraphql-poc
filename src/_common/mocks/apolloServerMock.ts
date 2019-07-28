import { createTestClient } from 'apollo-server-testing'
import { ApolloServer } from 'apollo-server-lambda'
import { schema } from '../../server'
import { UserRoles } from '../authorization/UserRoles'

export const createApolloTestClient = (config?: {
  uid?: string
  userRole?: UserRoles,
}) => createTestClient(new ApolloServer({
  schema,
  context: () => {
    return {
      uid: config && config.uid,
      userRole: config && config.userRole,
    }
  }
}) as any)
