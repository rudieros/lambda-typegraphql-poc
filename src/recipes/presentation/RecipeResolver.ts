import { Arg, Args, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { mockRecipe } from './mockRecipe'
import { RecipesArgs, User } from './models/GetRecipe'
import { CreateRecipeInput } from './models/CreateRecipeInput'
import { Recipe } from '../../_common/models/Recipe'

@Resolver(Recipe)
export class RecipeResolver {
  // constructor(private recipeService: RecipeService) {}

  @Query(returns => Recipe)
  async recipe(@Arg("id") id: string) {
    const recipe = mockRecipe
    if (recipe === undefined) {
      throw new Error('Oh no man!');
    }
    return recipe;
  }

  @Query(returns => [Recipe])
  recipes(@Args() { skip, take }: RecipesArgs) {
    // return this.recipeService.findAll({ skip, take });
    return [mockRecipe, mockRecipe]
  }

  @Mutation(returns => Recipe)
  addRecipe(
    @Arg("newRecipeData") newRecipeData: CreateRecipeInput,
    @Ctx("user") user: User,
  ): Promise<Recipe> {
    return Promise.resolve(mockRecipe)
  }

  @Mutation(returns => Boolean)
  async removeRecipe(@Arg("id") id: string) {
    try {
      return true;
    } catch {
      return false;
    }
  }
}
