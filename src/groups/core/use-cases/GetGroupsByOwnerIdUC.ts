import { BaseUseCase } from '../../../_common/architecture/BaseUseCase'
import { Inject, Service } from 'typedi'
import { GroupDataSource } from '../data-sources/GroupDataSource'
import { Group } from '../../../_common/models/Group'

@Service()
export class GetGroupsByOwnerIdUC extends BaseUseCase<string, Group[]> {
  @Inject(GroupDataSource)
  groupDataBase: GroupDataSource

  async execute(input: string): Promise<Group[]> {
    return this.groupDataBase.getUserOwnedGroups(input)
  }
}
