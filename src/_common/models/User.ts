import { Field, ID, Int, ObjectType, Root } from 'type-graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field(type => [User], { nullable: true })
  friends?: User[]

  @Field(type => Int, { nullable: true })
  friendCount?: number
}
