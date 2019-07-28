import { Arg, Args, Ctx, FieldResolver, Int, Mutation, Query, Resolver, Root } from 'type-graphql'
import { PaginationArgs } from '../../_common/graphql/commonTypes/PaginationArgs'
import { User } from '../../_common/models/User'
import { CreateUserInput } from './models/CreateUserInput'
import { CreateUserUC } from '../core/use-cases/CreateUserUC'
import { CreateFollowRelationInput } from './models/CreateFollowRelationInput'
import { CreateFollowRelationUC } from '../core/use-cases/CreateFollowRelationUC'
import { errorResponse, Response, sucessReponse } from '../../_common/graphql/commonTypes/Response'

@Resolver(User)
export class UserResolver {

  @Mutation(returns => User)
  async createUser(@Arg('user') input: CreateUserInput) {
    const useCase = new CreateUserUC()
    return useCase.execute(input)
  }

  @Mutation(returns => Response, { nullable: true })
  async createFollowRelation(@Args() input: CreateFollowRelationInput)  {
    const useCase = new CreateFollowRelationUC()
    return useCase.execute(input).then(sucessReponse).catch(errorResponse)
  }

  @Query(returns => User)
  async me() {
    return {
      id: '',
      name: '',
    }
  }

  @FieldResolver()
  async friends(@Args() { pageKey }: PaginationArgs, @Ctx() context) {
    return [
      {
        id: 'olaaa',
        name: 'Rudi'
      },
      {
        id: 'olaaa',
        name: 'Rudi'
      }
    ]
  }

  @FieldResolver(type => Int, { nullable: true })
  async friendCount(@Root('friends') friends: User[]) {
    console.log('friends', friends)
    return friends && friends.length || 0
  }
}
