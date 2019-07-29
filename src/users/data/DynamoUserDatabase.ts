import { UserDataSource } from '../core/data-sources/UserDataSource'
import { User } from '../../_common/models/User'
import { UserEntity } from '../../_common/database/entities/userEntity'

export class DynamoUserDatabase implements UserDataSource {
  mapKey(id: string) {
    return { id, sort: 'user' }
  }

  async getUsers(ids: string[]): Promise<User[]> {
    const result = await UserEntity.batchGet(ids.map(this.mapKey))
    return result
  }
}
