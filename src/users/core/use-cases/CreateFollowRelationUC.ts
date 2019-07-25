import { UserRelationEntity } from '../../../_common/database/entities/userRelationEntity'
import { CreateFollowRelationInput } from '../../presentation/models/CreateFollowRelationInput'

export class CreateFollowRelationUC {
  async execute(input: CreateFollowRelationInput) {
    const userRelation = new UserRelationEntity({
      id: input.you,
      sort: `follow_${input.userToBeFollowed}`,
    })
    return userRelation.save()
  }
}
