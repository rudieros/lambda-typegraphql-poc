import { launchLocalDynamoDb } from './launchLocalDynamodb'
import { syncAllLocalDataToTables } from './syncAllLocalDataToTables'
import { exec } from 'child_process'

;(async () => {
  await launchLocalDynamoDb()
  await syncAllLocalDataToTables()
  exec('dynamodb-admin --open', (error, stdout, stderr) => {
    if (error) {
      console.error('Error Opening Dynamo Admin:', error.message)
      return
    }
    console.log('DynamoDb Admin running')
  })
})()
