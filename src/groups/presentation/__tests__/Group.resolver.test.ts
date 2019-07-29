import gql from "graphql-tag";
import { createApolloTestClient } from "../../../_common/mocks/apolloServerMock";
import { MOCK_USERS } from "../../../_common/mocks/databaseMockInjectors/injectUserMocks";
import { UserRoles } from "../../../_common/authorization/UserRoles";
import { MOCK_GROUP_TO_CREATE } from "../../../_common/mocks/graphqlInputMocks/groupInputMocks";

describe("GroupResolver", () => {
  /**
   * Queries
   */
  describe("Authed Queries", () => {
    jest.setTimeout(1000000);
    const { query } = createApolloTestClient({
      uid: MOCK_USERS.me.id,
      userRole: UserRoles.USER
    });
    test("`myGroups` should return the logged user groups", async () => {
      const MY_GROUPS = gql`
        query {
          myGroups {
            id
            name
          }
        }
      `;
      const result = await query({
        query: MY_GROUPS
      });
      const groups = result.data && result.data.myGroups;
      expect(groups).toBeDefined();
      expect(groups.length).toBe(2);
      // groups.forEach((group) => { TODO make this test pass by getting the creator in the query
      //   expect(group.creatorId).toBe(MOCK_USERS.me.id)
      // })
    });
  });

  /**
   * Mutations
   */
  describe("Authed Mutations", () => {
    const { query } = createApolloTestClient({
      uid: MOCK_USERS.rooseBolton.id,
      userRole: UserRoles.USER
    });
    test("`createGroup` should create a group and we should be able to retrieve by `getGroup`", async () => {
      const groupToCreate = MOCK_GROUP_TO_CREATE;
      const CREATE_GROUP = gql`
        mutation CreateGroup($input: CreateGroupInput!) {
          createGroup(group: $input) {
            id
            name
          }
        }
      `;
      const GET_GROUP = gql`
        query GetGroup($input: String!) {
          getGroup(groupId: $input) {
            id
          }
        }
      `;
      const createGroupResult = await query({
        query: CREATE_GROUP,
        variables: { input: groupToCreate }
      });
      const createdGroup =
        createGroupResult.data && createGroupResult.data.createGroup;
      expect(createdGroup).toBeDefined();
      expect(createdGroup.id).not.toHaveLength(0);
      expect(createdGroup.name).toBe(groupToCreate.name);

      const getCreatedGroupResult = await query({
        query: GET_GROUP,
        variables: { input: createdGroup.id }
      });
      const group =
        getCreatedGroupResult.data && getCreatedGroupResult.data.getGroup;
      expect(group).toBeDefined();
      expect(group.id).toBe(createdGroup.id);
    });
  });
});
