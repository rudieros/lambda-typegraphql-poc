import { User } from "../../../_common/models/User";
import { Token } from "typedi";

export const UserDataSource = new Token<UserDataSource>();

export interface UserDataSource {
  getUsers(ids: string[]): Promise<User[]>;
}
