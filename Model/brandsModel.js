const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema(
  {
    brandAdd: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

var Brand = mongoose.model("brand", brandSchema);
module.exports = Brand;
