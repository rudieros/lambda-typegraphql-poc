import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Response {
  @Field()
  message: string
  @Field({ nullable: true })
  error?: boolean
}

export const sucessReponse = () => ({ message: 'Success' })
export const errorResponse = (e) => ({ message: e.toString(), error: true })
