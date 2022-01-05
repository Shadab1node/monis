const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema(
  {
    houseNumber: {
      type: String,
    },
    streat: {
      type: String,
    },
    lane: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: String,
    },
    userId: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

var Address = mongoose.model("address", addressSchema);
module.exports = Address;
