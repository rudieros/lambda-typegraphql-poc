export interface RelationsTableDB {
  id: string;
  sort?: string;
}

export const RelationsTableBaseSchema = {
  id: {
    type: String,
    validate: function(v) {
      return v && v.length > 0;
    },
    hashKey: true
  },
  sort: {
    type: String,
    rangeKey: true
  }
};
