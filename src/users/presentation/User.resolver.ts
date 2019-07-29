import {
  Arg,
  Args,
  Authorized,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'
import { PaginationArgs } from '../../_common/graphql/commonTypes/PaginationArgs'
import { User } from '../../_common/models/User'
import { CreateUserInput } from './models/CreateUserInput'
import { CreateUserUC } from '../core/use-cases/CreateUserUC'
import { errorResponse } from '../../_common/graphql/commonTypes/Response'
import { UserRoles } from '../../_common/authorization/UserRoles'
import { GetUsersByIDsUC } from '../core/use-cases/GetUsersByIDsUC'
import { OSContextType } from '../../context'
import { Inject, Service } from 'typedi'

@Resolver(User)
@Service()
export class UserResolver {
  @Inject('context')
  context: OSContextType

  @Authorized(UserRoles.USER)
  @Query((returns) => User)
  async me() {
    const uc = this.context.container.get(GetUsersByIDsUC)
    return uc.execute(this.context.uid).catch(errorResponse)
  }

  @Mutation((returns) => User)
  async createUser(@Arg('user') input: CreateUserInput) {
    const useCase = new CreateUserUC()
    return useCase.execute(input)
  }

  @Authorized(UserRoles.USER)
  @FieldResolver()
  async friends(@Args() { pageKey }: PaginationArgs, @Ctx() context) {
    return [
      {
        id: 'olaaa',
        name: 'Rudi',
      },
      {
        id: 'olaaa',
        name: 'Rudi',
      },
    ]
  }

  @FieldResolver((type) => Int, { nullable: true })
  async friendCount(@Root('friends') friends: User[]) {
    return (friends && friends.length) || 0
  }
}
