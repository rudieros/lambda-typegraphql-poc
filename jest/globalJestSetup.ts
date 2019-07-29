import '../scripts/setupTestEnvironmentVariables'
import { launchLocalDynamoDb } from '../scripts/launchLocalDynamodb'
import { syncTestMocksInDynamodb } from '../scripts/syncAllLocalDataToTables'

module.exports = async () => {
  await launchLocalDynamoDb()
  await syncTestMocksInDynamodb()
}
