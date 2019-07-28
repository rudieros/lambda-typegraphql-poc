import { User } from '../../../_common/models/User'

export interface UserDataSource {
  getUsers(ids: string[]): Promise<User>
}
