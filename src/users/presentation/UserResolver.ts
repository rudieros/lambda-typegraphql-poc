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
  // constructor(private recipeService: RecipeService) {}

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

  // @Query(returns => Recipe)
  // async recipe(@Arg("id") id: string) {
  //   const recipe = mockRecipe
  //   if (recipe === undefined) {
  //     throw new Error('Oh no man!');
  //   }
  //   return recipe;
  // }

  // @Query(returns => [Recipe])
  // recipes(@Args() { skip, take }: RecipesArgs) {
  //   // return this.recipeService.findAll({ skip, take });
  //   return [mockRecipe, mockRecipe]
  // }
  //
  // @Mutation(returns => Recipe)
  // addRecipe(
  //   @Arg("newRecipeData") newRecipeData: CreateUserInput,
  //   @Ctx("user") user: User,
  // ): Promise<Recipe> {
  //   return Promise.resolve(mockRecipe)
  // }
  //
  // @Mutation(returns => Boolean)
  // async removeRecipe(@Arg("id") id: string) {
  //   try {
  //     return true;
  //   } catch {
  //     return false;
  //   }
  // }
}
