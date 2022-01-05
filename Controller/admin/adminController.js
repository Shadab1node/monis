require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const nodemailer = require("nodemailer");
const Otp = require("../../Model/admin/otpModel");
const Admin = require("../../Model/admin/adminModel");

exports.adminRegister = async (req, res) => {
  try {
    const email = req.body.email;
    const checkUser = await Admin.findOne({ email: email });
    if (checkUser) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Email is already taken" }] });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    try {
      var user = new Admin();
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = hash;
      const token = await user.ganerateAuthToken();

      user.save(function (err) {
        res.json({
          message: "Record Registerd Successfully",
          data: user,
        });
      });
    } catch (error) {
      res.json({
        message: "Error find in when registerd the record",
      });
    }
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};

exports.adminLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await Admin.findOne({ email: email });
    const Password = await bcrypt.compare(password, user.password);
    if (Password) {
      return res.status(200).json({ msg: "successfully Login", user });
    } else {
      return res.status(200).json({ msg: "invalid details" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.mailSend = async (req, res) => {
  const { email } = req.body;
  if (email === "") {
    res.status(500).json({ msg: "Email is required" });
  } else {
    try {
      const checkUser = await Admin.findOne({ email });
      if (checkUser) {
        let otpData = new Otp({
          email,
          code: Math.floor(100000 + Math.random() * 900000),
          expireIn: new Date().getTime() + 300 * 1000,
        });

        let optResponse = await otpData.save();
        mailer(email, otpData.code);
        return res.status(200).json({ msg: "OTP sended to your mail" });
      } else {
        return res.status(400).json({ errors: [{ msg: "Email not exist" }] });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: error });
    }
  }
};

const mailer = (email, otp) => {
  var nodemailer = require("nodemailer");
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shadabakhtar476@gmail.com",
      pass: "razaraza",
    },
  });
  var mailOptions = {
    from: "shadabakhtar476@gmail.com",
    to: email,
    subject: "OTP mail",
    text: otp,
  };
  mailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

exports.forgotPassword = async (req, res) => {
  var { email, code } = req.body;
  let otp = await Otp.find({ email: email, code: code });
  if (otp) {
    let currentTime = new Date().getTime();
    let diff = otp.expireIn - currentTime;
    if (diff < 0) {
      return res.status(400).json({ errors: [{ msg: "Token expire" }] });
    } else {
      var email = req.body.email;
      let user = await Admin.findOne({ email });
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      user.password = hash;
      user.save();
      return res.status(200).json({ msg: "Password changes successfully" });
    }
  } else {
    return res.status(400).json({ errors: [{ msg: "Token Expired" }] });
  }
};
