import { Arg, Args, Authorized, Ctx, Field, ID, Mutation, ObjectType, Query, Resolver } from 'type-graphql'
import { mockRecipe } from './mockRecipe'
import { NewRecipeDataInput, RecipesArgs, User } from './models/GetRecipe'

@ObjectType()
export class Recipe {
  @Field(() => ID)
  id: string

  @Field()
  title: string

  @Field({ nullable: true })
  description?: string

  @Field()
  creationDate: Date

  @Field(() => [String])
  ingredients: string[]
}

@Resolver(Recipe)
export class RecipeResolver {
  // constructor(private recipeService: RecipeService) {}

  @Query(returns => Recipe)
  async recipe(@Arg("id") id: string) {
    const recipe = {  }
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
    @Arg("newRecipeData") newRecipeData: NewRecipeDataInput,
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
