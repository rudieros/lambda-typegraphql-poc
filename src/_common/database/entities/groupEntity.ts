import { MainTableBaseSchema, MainTableDB } from "../mainTableBaseSchema";
import { db, Schema } from "../db";
import { TableNames } from "../tableNames";

export interface GroupDB extends MainTableDB {
  name: string;
  memberCount?: number;
  creatorId: string;
  description?: string;
}

export const GroupSchema = new Schema(
  {
    ...MainTableBaseSchema,
    name: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      default: "This group description here!!!"
    },
    memberCount: {
      type: Number,
      default: 0
    },
    creatorId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const GroupEntity = db.model<GroupDB, MainTableDB>(
  "Group",
  GroupSchema,
  {
    tableName: TableNames.MAIN
  }
);
