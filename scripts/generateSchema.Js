require('reflect-metadata')
const fs = require('fs')
const buildSchemaSync = require('type-graphql').buildSchemaSync

const schema = buildSchemaSync({
  resolvers: [__dirname + "./../src/**/*.resolver.ts"],
})

console.log(__dirname + "./../src/**/*.resolver.ts")
fs.writeFileSync('schema.json', JSON.stringify(schema))
