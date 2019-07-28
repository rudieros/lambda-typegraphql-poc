import { BaseUseCase } from '../../../_common/architecture/BaseUseCase'
import { User } from '../../../_common/models/User'

export class GetUsersByIDsUC extends BaseUseCase<string[], User[]>{
  execute(input: string[]): Promise<User[]> {
    return undefined;
  }
}
