import { ArgsType, Field, Int } from 'type-graphql'
import { Max } from 'class-validator'

@ArgsType()
export class PaginationArgs {
  @Field({ nullable: true })
  pageKey?: string = null

  @Field((type) => Int)
  @Max(30)
  limit: number = 25
}
