import {
  Arg,
  Authorized,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root
} from "type-graphql";
import { errorResponse } from "../../_common/graphql/commonTypes/Response";
import { UserRoles } from "../../_common/authorization/UserRoles";
import { OSContextType } from "../../context";
import { Inject, Service } from "typedi";
import { Group } from "../../_common/models/Group";
import { GetGroupsByOwnerIdUC } from "../core/use-cases/GetGroupsByOwnerIdUC";
import { CreateGroupInput } from "./models/CreateGroupInput";
import { CreateGroupUC } from "../core/use-cases/CreateGroupUC";
import { GetGroupsByIDsUC } from "../core/use-cases/GetGroupsByIDsUC";

@Resolver(Group)
@Service()
export class GroupResolver {
  @Inject("context")
  context: OSContextType;

  @Authorized(UserRoles.USER)
  @Query(returns => Group)
  async getGroup(@Arg("groupId") groupId: string) {
    const uc = this.context.container.get(GetGroupsByIDsUC);
    return uc.execute(groupId).catch(errorResponse);
  }

  @Authorized(UserRoles.USER)
  @Query(returns => [Group])
  async myGroups() {
    const uc = this.context.container.get(GetGroupsByOwnerIdUC);
    return uc.execute(this.context.uid).catch(errorResponse);
  }

  @Authorized(UserRoles.USER)
  @Mutation(returns => Group)
  async createGroup(@Arg("group") groupToCreate: CreateGroupInput) {
    const uc = this.context.container.get(CreateGroupUC);
    return uc.execute(groupToCreate);
  }

  @FieldResolver(returns => Boolean)
  isCreatedByLoggedUser(@Root() group: Group) {
    return group.creator.id === this.context.uid;
  }
}
