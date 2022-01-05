const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    CategoryId: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

var Product = mongoose.model("product", productSchema);
module.exports = Product;
