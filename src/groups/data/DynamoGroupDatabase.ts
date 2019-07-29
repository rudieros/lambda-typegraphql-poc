import { GroupDataSource } from '../core/data-sources/GroupDataSource'
import { Group } from '../../_common/models/Group'
import { CreateGroupInput } from '../presentation/models/CreateGroupInput'
import { GroupEntity } from '../../_common/database/entities/groupEntity'
import { generateId } from '../../_common/utils/generateId'
import { Service } from 'typedi'
import { BaseDynamoMainTableDataBase } from '../../_common/architecture/BaseDynamoMainTableDataBase'

@Service()
export class DynamoGroupDatabase extends BaseDynamoMainTableDataBase
  implements GroupDataSource {
  mapParamsToDynamoQueryKey1(params: any) {}

  getGroups(ids: string[]): Promise<Group[]> {
    return GroupEntity.batchGet(ids.map(this.mapIdToDynamoPrimaryKey))
  }

  getUserOwnedGroups(userId: string): Promise<Group[]> {
    return GroupEntity.query('queryPartition1')
      .eq(userId)
      .exec()
  }

  createGroup(group: CreateGroupInput): Promise<Group> {
    const id = generateId()
    return GroupEntity.create({
      id,
      name: group.name,
      description: group.description,
      creatorId: this.context.uid,
      queryPartition1: this.context.uid,
      querySort1: new Date().toISOString(),
    })
  }
}
