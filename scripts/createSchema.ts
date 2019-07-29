import "reflect-metadata";
import { printSchema } from "graphql";
import * as fs from "fs";
import * as path from "path";
import { schema } from "../src/server";

(async () => {
  const sdl = printSchema(schema);
  fs.writeFileSync(path.join(process.cwd(), "schema.graphql"), sdl);
})();
