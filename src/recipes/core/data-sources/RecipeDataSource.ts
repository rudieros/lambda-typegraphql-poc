import { Recipe } from '../../../_common/models/Recipe'

export interface RecipeDataSource {
  createRecipe(recipe: Recipe): Promise<Recipe>
}
