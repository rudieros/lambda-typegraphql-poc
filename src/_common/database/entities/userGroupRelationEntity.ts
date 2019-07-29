import { MainTableDB } from "../mainTableBaseSchema";
import { db, Schema } from "../db";
import { TableNames } from "../tableNames";
import {
  RelationsTableBaseSchema,
  RelationsTableDB
} from "../relationsTableBaseSchema";

export interface UserGroupRelationDB extends RelationsTableDB {
  creationDate: string;
}

export const UserGroupRelationSchema = new Schema(
  {
    ...RelationsTableBaseSchema,
    creationDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const UserGroupRelationsEntity = db.model<
  UserGroupRelationDB,
  RelationsTableDB
>("UserGroupRelation", UserGroupRelationSchema, {
  tableName: TableNames.RELATIONS
});
