const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "profile",
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  review: {
    type: String,
  },
  notes: {
    type: String,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

var Review = mongoose.model("review", reviewSchema);
module.exports = Review;
