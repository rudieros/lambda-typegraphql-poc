export interface MainTableDB {
  id: string
  queryPartition1?: string
  querySort1?: string
}

export const MainTableBaseSchema = {
  id: {
    type: String,
    validate: function(v) {
      return v && v.length > 0
    },
    hashKey: true,
  },
  queryPartition1: {
    type: String,
    required: false,
    index: {
      name: 'queryKey1Index',
      rangeKey: 'querySort1',
      global: true,
    },
  },
  querySort1: {
    required: false,
    type: String,
  },
}
