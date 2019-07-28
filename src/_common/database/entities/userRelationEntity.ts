import { MainTableBaseSchema, MainTableDB } from '../mainTableBaseSchema'
import { db, Schema } from '../db'
import { TableNames } from '../tableNames'

export interface UserRelationDB extends MainTableDB {}

export const UserRelationSchema = new Schema({
    ...MainTableBaseSchema,
  },
  {
    useDocumentTypes: true
  })

export const UserRelationEntity = db.model<UserRelationDB, MainTableDB>('UserRelation', UserRelationSchema,
  {
    tableName: TableNames.MAIN,
  })
