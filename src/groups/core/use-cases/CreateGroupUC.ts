import { CreateGroupInput } from "../../presentation/models/CreateGroupInput";
import { BaseUseCase } from "../../../_common/architecture/BaseUseCase";
import { Group } from "../../../_common/models/Group";
import { Inject, Service } from "typedi";
import { GroupDataSource } from "../data-sources/GroupDataSource";

@Service()
export class CreateGroupUC extends BaseUseCase<CreateGroupInput, Group> {
  @Inject(GroupDataSource)
  groupDataSource: GroupDataSource;

  execute(input: CreateGroupInput): Promise<Group> {
    return this.groupDataSource.createGroup(input);
  }
}
