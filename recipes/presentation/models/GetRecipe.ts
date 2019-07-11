import { ArgsType, Field, InputType, Int } from 'type-graphql'
import { ArrayMaxSize, Length, Max, MaxLength, Min } from 'class-validator'

@InputType()
export class NewRecipeDataInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @Length(30, 255)
  description?: string;

  @Field(type => [String])
  @ArrayMaxSize(30)
  ingredients: string[];
}

@ArgsType()
export class RecipesArgs {
  @Field(type => Int)
  @Min(0)
  skip: number = 0;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  take: number = 25;
}

export class User {
  id: string
  name: string
}
