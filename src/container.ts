import { ContainerInstance } from "typedi";
import { UserDataSource } from "./users/core/data-sources/UserDataSource";
import { DynamoUserDatabase } from "./users/data/DynamoUserDatabase";
import { GroupDataSource } from "./groups/core/data-sources/GroupDataSource";
import { DynamoGroupDatabase } from "./groups/data/DynamoGroupDatabase";
import { UserGroupRelationDataSource } from "./userGroupRelation/core/data-sources/UserGroupRelationDataSource";
import { DynamoUserGroupRelationDatabase } from "./userGroupRelation/data/DynamoUserGroupRelationDatabase";

/**
 * Container setup is done here
 * inject your service to your container
 * @param container
 * @param context
 */
export const setupContainer = (container: ContainerInstance, context: any) => {
  container.set("context", context);
  container.set(UserDataSource, new DynamoUserDatabase());
  container.set(GroupDataSource, new DynamoGroupDatabase(container));
  container.set(
    UserGroupRelationDataSource,
    new DynamoUserGroupRelationDatabase(container)
  );
};
