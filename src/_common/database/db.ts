import * as dynamoose from '@appsimples/dynamoose'

if (process.env.IS_OFFLINE) {
  dynamoose.local()
}

dynamoose.setDefaults({
  create: !!process.env.IS_OFFLINE, // Only force create the tables for local development and testing
})

export const db = dynamoose
export const Schema = db.Schema
