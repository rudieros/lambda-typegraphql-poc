import { BaseDynamoMainTableDataBase } from '../../_common/architecture/BaseDynamoMainTableDataBase'
import { UserGroupRelationDataSource } from '../core/data-sources/UserGroupRelationDataSource'
import { UserGroupRelation } from '../../_common/models/UserGroupRelation'
import { Service } from 'typedi'
import {
  UserGroupRelationDB,
  UserGroupRelationsEntity,
} from '../../_common/database/entities/userGroupRelationEntity'
import * as DataLoader from 'dataloader'
import { RelationsTableDB } from '../../_common/database/relationsTableBaseSchema'

@Service()
export class DynamoUserGroupRelationDatabase extends BaseDynamoMainTableDataBase
  implements UserGroupRelationDataSource {
  // Use Data Loader for batch caching!
  userRelationDataLoader = new DataLoader(async (keys: RelationsTableDB[]) => {
    const result = await UserGroupRelationsEntity.batchGet(keys)
    const sameSizeResult = keys.map(
      (key) =>
        result.find((result) => {
          return result.id === key.id && result.sort === key.sort
        }) || null
    )
    return sameSizeResult
  })

  createGroupRelation(relation: UserGroupRelation): Promise<UserGroupRelation> {
    return undefined
  }

  mapAppToDynamoKeys(input: UserGroupRelation): RelationsTableDB {
    return {
      id: input.userId,
      sort: input.groupId,
    }
  }

  mapDynamoModelToAppModel(input: UserGroupRelationDB): UserGroupRelation {
    return {
      userId: input.id,
      groupId: input.sort,
      createdAt: input.creationDate,
    }
  }

  async getGroupRelation(
    userId: string,
    groupId: string
  ): Promise<UserGroupRelation> {
    const relation = await this.userRelationDataLoader.load(
      this.mapAppToDynamoKeys({ userId, groupId })
    )
    return {
      groupId: relation.sort,
      userId: relation.id,
    }
  }

  async getUserGroups(userId: string): Promise<UserGroupRelation[]> {
    const groups = await UserGroupRelationsEntity.query('id')
      .eq(userId)
      .exec()
    return groups.map(this.mapDynamoModelToAppModel)
  }
}
