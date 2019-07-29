import gql from 'graphql-tag'
import { createApolloTestClient } from '../../../_common/mocks/apolloServerMock'
import { MOCK_USERS } from '../../../_common/mocks/databaseMockInjectors/injectUserMocks'
import { UserRoles } from '../../../_common/authorization/UserRoles'
import { MOCK_USER_GROUP_RELATIONS } from '../../../_common/mocks/databaseMockInjectors/injectUserGroupRelationMocks'

describe('UserGroupRelationResolver', () => {
  describe('Authed Queries', () => {
    jest.setTimeout(1000000)
    const { query } = createApolloTestClient({
      uid: MOCK_USERS.me.id,
      userRole: UserRoles.USER,
    })
    test("`getUserGroups` should return a user's groups successfully", async () => {
      const ME = gql`
        query GetUserGroups($id: String!) {
          getUserGroups(userId: $id) {
            id
            name
            isLoggedUserParticipant {
              groupId
            }
          }
        }
      `
      const result = await query({
        query: ME,
        variables: { id: MOCK_USERS.arya.id },
      })
      const aryaGroups = Object.values(MOCK_USER_GROUP_RELATIONS).filter(
        (group) => group.id === MOCK_USERS.arya.id
      )
      const groups = result.data && result.data.getUserGroups
      expect(groups).toBeDefined()
      expect(groups).toHaveLength(aryaGroups.length)
      // TODO check isLoggedUserParticipant
    })
  })
})
