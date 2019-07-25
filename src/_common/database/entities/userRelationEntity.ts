import { MainTableBaseSchema, MainTableDB, MainTableSchema } from '../mainTableBaseSchema'
import { db, Schema } from '../db'

export interface UserRelationDB extends MainTableDB {}

export const UserRelationSchema = new Schema({
    ...MainTableBaseSchema,
  },
  {
    throughput: { read: 1, write: 1 },
    useDocumentTypes: true
  })

export const UserRelationEntity = db.model<UserRelationDB, MainTableDB>('UserRelation', UserRelationSchema,
//   {
//   tableName: 'GraphqlPoc'
// }
)
