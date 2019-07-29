import { CreateUserInput } from "../../presentation/models/CreateGroupInput";
import { UserEntity } from "../../../_common/database/entities/userEntity";

export class CreateGroupUC {
  async execute(input: CreateUserInput) {
    const user = new UserEntity({
      id: Date.now().toString(),
      sort: "user",
      name: input.name,
      email: input.email
    });
    return user.save();
  }
}
