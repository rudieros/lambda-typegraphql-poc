import { CreateUserInput } from '../../presentation/models/CreateUserInput'
import { UserEntity } from '../../../_common/database/entities/userEntity'

export class CreateUserUC {
  async execute(input: CreateUserInput) {
    const user = new UserEntity({
      id: Date.now().toString(),
      name: input.name,
      email: input.email,
    })
    return user.save()
  }
}
