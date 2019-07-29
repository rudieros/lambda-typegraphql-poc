import { Field, InputType } from 'type-graphql'
import { IsEmail, MaxLength } from 'class-validator'

@InputType()
export class CreateUserInput {
  @Field()
  @MaxLength(30)
  name: string
  @Field()
  @MaxLength(30)
  @IsEmail()
  email: string
}
