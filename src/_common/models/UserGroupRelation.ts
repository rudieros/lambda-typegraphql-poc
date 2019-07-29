import { Field, GraphQLISODateTime, ID, ObjectType } from "type-graphql";

@ObjectType()
export class UserGroupRelation {
  @Field(() => ID)
  userId: string;

  @Field(type => String)
  groupId: string;

  @Field(type => GraphQLISODateTime)
  createdAt?: string;
}
