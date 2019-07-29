import { BaseUseCase } from "../../../_common/architecture/BaseUseCase";
import { Inject, Service } from "typedi";
import { UserGroupRelationDataSource } from "../data-sources/UserGroupRelationDataSource";
import { UserGroupRelation } from "../../../_common/models/UserGroupRelation";
import { Group } from "../../../_common/models/Group";
import { GroupDataSource } from "../../../groups/core/data-sources/GroupDataSource";

@Service()
export class GetUserGroupRelations extends BaseUseCase<string, Group[]> {
  @Inject(UserGroupRelationDataSource)
  userGroupRelationDataSource: UserGroupRelationDataSource;

  @Inject(GroupDataSource)
  groupDataSource: GroupDataSource;

  async execute(userId: string): Promise<Group[]> {
    const userGroupRelations = await this.userGroupRelationDataSource.getUserGroups(
      userId
    );
    const groups = await this.groupDataSource.getGroups(
      userGroupRelations.map(relation => relation.groupId)
    );
    return groups;
  }
}
