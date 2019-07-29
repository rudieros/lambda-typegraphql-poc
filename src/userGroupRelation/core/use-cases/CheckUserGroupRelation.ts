import { BaseUseCase } from "../../../_common/architecture/BaseUseCase";
import { Inject, Service } from "typedi";
import { UserGroupRelationDataSource } from "../data-sources/UserGroupRelationDataSource";
import { UserGroupRelation } from "../../../_common/models/UserGroupRelation";

@Service()
export class CheckUserGroupRelation extends BaseUseCase<
  UserGroupRelation,
  boolean
> {
  @Inject(UserGroupRelationDataSource)
  userGroupRelationDataSource: UserGroupRelationDataSource;

  async execute(input: UserGroupRelation): Promise<boolean> {
    const exists = await this.userGroupRelationDataSource.getGroupRelation(
      input.userId,
      input.groupId
    );
    return !!exists;
  }
}
