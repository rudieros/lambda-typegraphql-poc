import { Token } from 'typedi'
import { Group } from '../../../_common/models/Group'
import { CreateGroupInput } from '../../presentation/models/CreateGroupInput'

export const GroupDataSource = new Token<GroupDataSource>()

export interface GroupDataSource {
  getUserOwnedGroups(id: string): Promise<Group[]>
  getGroups(ids: string[]): Promise<Group[]>
  createGroup(group: CreateGroupInput): Promise<Group>
}
