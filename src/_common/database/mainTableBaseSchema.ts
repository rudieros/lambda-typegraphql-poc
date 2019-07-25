import { db } from './db'

const Schema = db.Schema

export interface MainTableDB {
  id: string
  sort: string
}

export const MainTableBaseSchema = {
  id: {
    type: Number,
    validate: function (v) {
      return v > 0
    },
    hashKey: true
  },
  sort: {
    type: String,
    rangeKey: true,
    index: true // name: nameLocalIndex, ProjectionType: ALL
  },
}

export const MainTableSchema = new Schema({
    ownerId: {
      type: Number,
      validate: function(v) { return v > 0; },
      hashKey: true
    },
    name: {
      type: String,
      rangeKey: true,
      index: true // name: nameLocalIndex, ProjectionType: ALL
    },
    race: {
      type: String,
      enum: ['Golden retriever', 'Beagle']
    },
    breed: {
      type: String,
      trim: true,
      required: true,
      index: {
        global: true,
        rangeKey: 'ownerId',
        name: 'BreedIndex',
        project: true, // ProjectionType: ALL
        throughput: 5 // read and write are both 5
      }
    },
    color: {
      lowercase: true,
      type: [String],
      default: ['Brown']
    },
    age: Number,
    awards: {
      type: 'list',
      list: [{
        type: 'map',
        map: {
          year: Number,
          name: String
        }
      }]
    }
  },
  {
    throughput: {read: 15, write: 5}
  })

// export const MainTableSchema = {
//   name: 'GraphQL-POC',
//   primaryKey: {
//     partitionKey: {
//       attribute: 'id',
//       type: String,
//     },
//     sortKey: {
//       attribute: 'range',
//       type: String
//     }
//   },
//   indexes: [
//     {
//       indexType: 'GSI',
//       partitionKey: {
//         attribute: 'id_2',
//         type: String,
//       },
//       sortKey: {
//         attribute: 'range_2',
//         type: String,
//       },
//     },
//     {
//       indexType: 'LSI',
//       sortKey: {
//         attribute: 'range_3_local',
//         type: String,
//       },
//     },
//   ]
// }
