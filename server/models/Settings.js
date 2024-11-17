const mongoose = require('mongoose');
const { Schema } = mongoose;

const settingsSchema = new Schema(
  {
    currentProjects: {
      type: Map,
      of: String,
      required: true,
    },
    pastPrograms: {
      type: Map,
      of: String,
      required: true,
    },
    studentStories: {
      type: Map,
      of: String,
      required: true,
    },
    navBarApplyLink: {
      type: String,
      required: true, 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Settings', settingsSchema);
