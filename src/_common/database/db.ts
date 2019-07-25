import * as dynamoose from 'dynamoose'

if (process.env.IS_OFFLINE) {
  dynamoose.local()
}
dynamoose.setDefaults({
  create: false
})

export const db = dynamoose
export const Schema = db.Schema
