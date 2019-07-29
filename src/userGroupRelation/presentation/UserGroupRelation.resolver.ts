import {
  Arg,
  Authorized,
  FieldResolver,
  Query,
  Resolver,
  Root,
} from 'type-graphql'
import { OSContextType } from '../../context'
import { Inject, Service } from 'typedi'
import { Group } from '../../_common/models/Group'
import { UserGroupRelation } from '../../_common/models/UserGroupRelation'
import { CheckUserGroupRelation } from '../core/use-cases/CheckUserGroupRelation'
import { UserRoles } from '../../_common/authorization/UserRoles'
import { GetUserGroupRelations } from '../core/use-cases/GetUserGroupRelations'

@Resolver(Group)
@Service()
export class UserGroupRelationResolver {
  @Inject('context')
  context: OSContextType

  @Authorized(UserRoles.USER)
  @Query((returns) => [Group])
  async getUserGroups(@Arg('userId') userId: string): Promise<Group[]> {
    const uc = this.context.container.get(GetUserGroupRelations)
    return uc.execute(userId)
  }

  @FieldResolver((returns) => UserGroupRelation, { nullable: true })
  isLoggedUserParticipant(@Root() group: Group) {
    return this.context.container
      .get(CheckUserGroupRelation)
      .execute({ userId: this.context.uid, groupId: group.id })
  }
}
