const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  cartId: {
    type: Schema.Types.ObjectId,
    ref: "cart",
  },
  addressId: {
    type: Schema.Types.ObjectId,
    ref: "address",
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

var Order = mongoose.model("order", orderSchema);
module.exports = Order;
