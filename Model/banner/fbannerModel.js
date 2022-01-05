const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fbannerSchema = new Schema(
  {
    fbannerAdd: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

var Fbanner = mongoose.model("fbanner", fbannerSchema);
module.exports = Fbanner;
