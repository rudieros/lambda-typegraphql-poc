import './setupTestEnvironmentVariables'
import { configureInstaller, launch } from 'dynamodb-local'

export const launchLocalDynamoDb = async () => {
  console.log('Start configuring local DynamoDB for testing')
  configureInstaller({
    installPath: './.dynamodb',
  } as any)
  await launch(Number(process.env.DYNAMODB_LOCAL_PORT) || 8000, null, [
    '-sharedDb',
  ])
  console.log('Local DynamoDB for testing launched successfully')
}
