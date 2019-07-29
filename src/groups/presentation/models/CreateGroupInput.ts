import { Field, InputType } from 'type-graphql'
import { MaxLength } from 'class-validator'

@InputType()
export class CreateGroupInput {
  @Field()
  @MaxLength(30)
  name: string
  @Field()
  @MaxLength(200)
  description: string
}
