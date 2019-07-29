import { createTestClient } from "apollo-server-testing";
import { ApolloServer } from "apollo-server-lambda";
import { schema } from "../../server";
import { UserRoles } from "../authorization/UserRoles";
import { Container } from "typedi";

export const createApolloTestClient = (config?: {
  uid?: string;
  userRole?: UserRoles;
}) =>
  createTestClient(new ApolloServer({
    schema,
    context: () => {
      const requestId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); // uuid-like
      const container = Container.of(requestId); // get the scoped container
      const context = { requestId, container }; // create fresh context object
      container.set("context", context); // place context or other data in container
      return {
        ...context,
        uid: config && config.uid,
        userRole: config && config.userRole
      };
    }
  }) as any);
