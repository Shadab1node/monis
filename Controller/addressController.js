const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const Address = require("../Model/addressModel");

exports.addAddress = async (req, res) => {
  try {
    var address = new Address();
    (address.houseNumber = req.body.houseNumber),
      (address.streat = req.body.streat),
      (address.lane = req.body.lane),
      (address.city = req.body.city),
      (address.state = req.body.state),
      (address.pincode = req.body.pincode),
      (address.userId = req.body.userId),
      address.save(function (err) {
        res.json({
          message: "Address add Successfully",
          data: address,
        });
      });
  } catch (error) {
    res.json({
      message: "Error find in when adding the banner",
    });
  }
};

exports.viewAddress = async (req, res) => {
  try {
    const viewallAddress = await Address.find({});
    return res.status(200).json(viewallAddress);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.viewAddressbyId = async (req, res) => {
  const view = await Address.findOne({ _id: req.params.id });
  if (view) {
    res.json({
      message: "You successfully find the data",
      data: view,
    });
  } else {
    res.json({
      message: "Invalid Id",
    });
  }
};

exports.updateAddress = async (req, res) => {
  const { state, pincode, streat, lane, city, houseNumber } = req.body;
  try {
    const update = await Address.findByIdAndUpdate(req.params.id, {
      state,
      pincode,
      streat,
      lane,
      city,
      houseNumber,
    });
    console.log(state);
    return res
      .status(200)
      .json({ msg: "Successfully update the data", update });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const deletebyid = await Address.deleteOne({ _id: req.params.id });
    return res.status(200).json(deletebyid);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
