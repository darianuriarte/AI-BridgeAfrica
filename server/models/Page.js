const mongoose = require('mongoose');
const { Schema } = mongoose;

const pageSchema = new Schema(
  {
    pageName: { type: String, required: true, unique: true },
    components: {
      type: Map,
      of: Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Page', pageSchema);
