import { BaseUseCase } from '../../../_common/architecture/BaseUseCase'
import { Inject, Service } from 'typedi'
import { Group } from '../../../_common/models/Group'
import { GroupDataSource } from '../data-sources/GroupDataSource'

@Service()
export class GetGroupsByIDsUC extends BaseUseCase<
  string[] | string,
  Group | Group[]
> {
  @Inject(GroupDataSource)
  groupDataSource: GroupDataSource

  async execute(input: string[] | string): Promise<Group | Group[]> {
    if (input instanceof Array) {
      return this.groupDataSource.getGroups(input)
    }
    const users = await this.groupDataSource.getGroups([input])
    return users[0]
  }
}
