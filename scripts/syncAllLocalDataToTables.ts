import './setupTestEnvironmentVariables'
import { injectUserMocks } from '../src/_common/mocks/databaseMockInjectors/injectUserMocks'
import { injectGroupMocks } from '../src/_common/mocks/databaseMockInjectors/injectGroupsMocks'
import { injectUserGroupRelationMocks } from '../src/_common/mocks/databaseMockInjectors/injectUserGroupRelationMocks'

/**
 * Use this method only for mocks that will be used in automated tests
 */
export const syncTestMocksInDynamodb = async () => {
  await Promise.all([
    injectUserMocks(),
    injectGroupMocks(),
    injectUserGroupRelationMocks(),
  ])
}

/**
 * Use this method to load data for local development and that should not be put into tests
 * For instance, data that was previously saved when running `yarn backup`
 */
export const syncExtraMocksInDynamoDb = async () => {
  // TODO
}

export const syncAllLocalDataToTables = async () => {
  await syncTestMocksInDynamodb()
  await syncExtraMocksInDynamoDb()
}
