import { ArgsType, Field, InputType } from 'type-graphql'
import { IsEmail, MaxLength } from 'class-validator'

@ArgsType()
export class CreateFollowRelationInput {
  @Field()
  userToBeFollowed: string
  @Field()
  you: string
}
