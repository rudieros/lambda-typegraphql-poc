require('reflect-metadata')
const fs = require('fs')
const buildSchemaSync = require('type-graphql').buildSchemaSync

const path = process.cwd() + "/src/**/*.resolver.ts"
const schema = buildSchemaSync({
  resolvers: [path],
})

console.log(path)
fs.writeFileSync('schema.json', JSON.stringify(schema))
