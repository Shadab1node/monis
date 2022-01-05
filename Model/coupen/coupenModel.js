const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coupenSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  offerDetail: {
    type: String,
    required: true,
  },
  expireIn: {
    type: String,
  },
});

var Coupen = mongoose.model("Coupen", coupenSchema);
module.exports = Coupen;
