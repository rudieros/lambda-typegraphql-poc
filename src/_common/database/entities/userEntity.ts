import { MainTableBaseSchema, MainTableDB, MainTableSchema } from '../mainTableBaseSchema'
import { db, Schema } from '../db'

export const userEntity = {
  tableSchema: MainTableSchema,

}

class UserEntityDocument {
  id: string
  name: string
  email: string
}

export interface UserDB extends MainTableDB {
  name: string
  email: string
}

export const UserSchema = new Schema({
    ...MainTableBaseSchema,
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    throughput: { read: 1, write: 1 },
    useDocumentTypes: true
  })

export const UserEntity = db.model<UserDB, MainTableDB>('GraphQL_POC', UserSchema,
//   {
//   tableName: 'GraphqlPoc'
// }
)
