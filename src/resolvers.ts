import { UserResolver } from "./users/presentation/User.resolver";
import { GroupResolver } from "./groups/presentation/Group.resolver";
import { UserGroupRelationResolver } from "./userGroupRelation/presentation/UserGroupRelation.resolver";

export const resolvers = [
  UserResolver,
  GroupResolver,
  UserGroupRelationResolver
];
