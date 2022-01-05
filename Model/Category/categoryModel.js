const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    category: { type: String },
    // categoryId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "video",
    // },
    Image: { type: String },
  },
  {
    timestamps: true,
  }
);

var Category = mongoose.model("category", categorySchema);
module.exports = Category;
