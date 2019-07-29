import { MainTableBaseSchema, MainTableDB } from '../mainTableBaseSchema'
import { db, Schema } from '../db'
import { TableNames } from '../tableNames'

export interface UserDB extends MainTableDB {
  name: string
  email: string
}

export const UserSchema = new Schema(
  {
    ...MainTableBaseSchema,
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
  },
  {
    timestamps: true,
  }
)

export const UserEntity = db.model<UserDB, MainTableDB>('User', UserSchema, {
  tableName: TableNames.MAIN,
})
