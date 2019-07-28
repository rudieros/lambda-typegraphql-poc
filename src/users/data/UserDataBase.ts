import { UserDataSource } from '../core/data-sources/UserDataSource'
import { User } from '../../_common/models/User'

export class UserDataBase implements UserDataSource {
  getUsers(ids: string[]): Promise<User> {
    return undefined;
  }

}
