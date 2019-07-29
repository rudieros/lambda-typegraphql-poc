const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env.test") });

import "../src/_common/database/db";
import { configureInstaller, launch } from "dynamodb-local";
import { injectUserMocks } from "../src/_common/mocks/databaseMockInjectors/injectUserMocks";
import { injectGroupMocks } from "../src/_common/mocks/databaseMockInjectors/injectGroupsMocks";
import { injectUserGroupRelationMocks } from "../src/_common/mocks/databaseMockInjectors/injectUserGroupRelationMocks";

module.exports = async () => {
  console.log("Start configuring local DynamoDB for testing");
  configureInstaller({
    installPath: "./.dynamodb",
    downloadUrl:
      "https://s3.eu-central-1.amazonaws.com/dynamodb-local-frankfurt/dynamodb_local_latest.tar.gz"
  });
  await launch(Number(process.env.DYNAMODB_LOCAL_PORT) || 8000, null, [
    "-sharedDb"
  ]);
  console.log("Local DynamoDB for testing launched successfully");
  await Promise.all([
    injectUserMocks(),
    injectGroupMocks(),
    injectUserGroupRelationMocks()
  ]);
};
