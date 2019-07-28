import gql from 'graphql-tag'
import { createApolloTestClient } from '../../../_common/mocks/apolloServerMock'
import { MOCK_USERS_ME } from '../../../_common/mocks/databaseMockInjectors/injectUsersMocks'
import { UserRoles } from '../../../_common/authorization/UserRoles'

describe('UserResolver', () => {
  describe('Authed Queries',() => {
    const { query } = createApolloTestClient({
      uid: MOCK_USERS_ME.id,
      userRole: UserRoles.USER,
    })
    test('`me` should return value successfully', async () => {
      const ME = gql`
        query {
            me {
                id
            }
        }
      `
      const result = await query({
        query: ME,
      })
      console.log('Result', result)
      expect(result.data.me.id).toBe(MOCK_USERS_ME.id)
    })
  })
  describe('Mutations', () => {

  })
  describe('FieldResolvers', () => {

  })
})
