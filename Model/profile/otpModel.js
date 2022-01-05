const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "profile",
  },
  email: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
  expireIn: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});
var profileOtp = mongoose.model("profileOtp", profileSchema);
module.exports = profileOtp;
