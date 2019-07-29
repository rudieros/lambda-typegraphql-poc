import { Token } from "typedi";
import { UserGroupRelation } from "../../../_common/models/UserGroupRelation";

export const UserGroupRelationDataSource = new Token<
  UserGroupRelationDataSource
>();

export interface UserGroupRelationDataSource {
  createGroupRelation(relation: UserGroupRelation): Promise<UserGroupRelation>;
  getGroupRelation(userId: string, groupId: string): Promise<UserGroupRelation>;
  getUserGroups(userId: string): Promise<UserGroupRelation[]>;
}
