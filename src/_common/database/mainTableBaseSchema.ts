export interface MainTableDB {
  id: string
  sort: string
}

export const MainTableBaseSchema = {
  id: {
    type: String,
    validate: function (v) {
      return v > 0
    },
    hashKey: true
  },
  sort: {
    type: String,
    rangeKey: true,
  },
}
