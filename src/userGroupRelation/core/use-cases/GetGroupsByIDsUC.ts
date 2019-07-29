import { BaseUseCase } from "../../../_common/architecture/BaseUseCase";
import { User } from "../../../_common/models/User";
import { Inject, Service } from "typedi";
import { GroupDataSource } from "../data-sources/GroupDataSource";

@Service()
export class GetGroupsByIDsUC extends BaseUseCase<
  string[] | string,
  User | User[]
> {
  @Inject(GroupDataSource)
  userDataBase: GroupDataSource;

  async execute(input: string[] | string): Promise<User[] | User> {
    if (input instanceof Array) {
      return this.userDataBase.getUsers(input);
    }
    const users = await this.userDataBase.getUsers([input]);
    return users[0];
  }
}
