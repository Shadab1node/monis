const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tokens: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.methods.ganerateAuthToken = async function () {
  try {
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
adminSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log("in catch of validpassword");
    console.log(error);
    throw error;
  }
};

var Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
