var mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var Schema = mongoose.Schema;

var profileSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tokens: {
      type: String,
    },
    Image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

profileSchema.set("validateBeforeSave", false);
profileSchema.path("email").validate(() => {
  return false;
}, "Email Already exists");

profileSchema.methods.ganerateAuthToken = async function () {
  try {
    console.log(this._id);
    const token = jwt.sign(
      { _id: this._id.toString() },
      process.env.PROCESS_KEY
    );
    this.tokens = token;
    await this.save();
    return token;
  } catch (error) {
    console.log(`the error part ${error}`);
  }
};

// validate Password
profileSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log("in catch of validpassword");
    console.log(error);
    throw error;
  }
};

var Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
