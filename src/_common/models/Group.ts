import { Field, ID, Int, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Group {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => Boolean)
  isCreatedByLoggedUser?: boolean;

  @Field(type => User)
  creator?: User;

  @Field(type => [User])
  participants?: User[];

  @Field(type => Int)
  memberCount?: number;

  @Field(type => Boolean)
  isLoggedUserMember?: boolean;
}
