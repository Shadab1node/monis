const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "profile",
  },
  products: {
    type: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "product",
        },
        quantity: Number,
        total: String,
      },
    ],
  },
  active: {
    type: Boolean,
    default: true,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

var Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
