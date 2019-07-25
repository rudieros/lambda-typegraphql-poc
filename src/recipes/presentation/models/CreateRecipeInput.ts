import { Field, InputType } from 'type-graphql'
import { ArrayMaxSize, Length, MaxLength } from 'class-validator'

@InputType()
export class CreateRecipeInput {
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
