import { MainTableBaseSchema, MainTableDB } from '../mainTableBaseSchema'
import { db, Schema } from '../db'
import { TableNames } from '../tableNames'

export interface UserDB extends MainTableDB {
  sort: 'user' // override the MainTableDB sort typing to make it more specific
  name: string
  email: string
}

export const UserSchema = new Schema({
  ...MainTableBaseSchema,
  sort: { // For the user document we want to fix the sort value
    ...MainTableBaseSchema.sort,
    set: () => 'user',
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
})


export const UserEntity = db.model<UserDB, MainTableDB>('GraphQL_POC', UserSchema,
  {
    tableName: TableNames.MAIN,
  })
