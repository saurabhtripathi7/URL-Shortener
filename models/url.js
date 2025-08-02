const mongoose = require("mongoose");

// SCHEMA DEFINITION
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,   
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,   
    },
    visitHistory: [
      {
        timeStamp: { type: Date }

      }
    ]
  },
  {
    timestamps: true   
  }
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
