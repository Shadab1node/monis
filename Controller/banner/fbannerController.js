const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const Fbanner = require("../../Model/banner/fbannerModel");

exports.fbannerAdd = async (req, res) => {
  try {
    const fbannerImage = req.file ? req.file.filename : null;
    var fbanner = new Fbanner();
    fbanner.fbannerAdd = fbannerImage;
    fbanner.save(function (err) {
      res.json({
        message: "footer banner add Successfully",
        data: fbanner,
      });
    });
  } catch (error) {
    res.json({
      message: "Error find in when adding the footer banner",
    });
  }
};

exports.view = async (req, res) => {
  try {
    const viewAllUser = await Fbanner.find({});
    return res.status(200).json(viewAllUser);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.updatefbanner = async (req, res) => {
  const fbannerAdd = req.body.fbannerAdd;
  try {
    const update = await Fbanner.findByIdAndUpdate(req.params.id, {
      fbannerAdd,
    });
    return res.status(200).json(update);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deletefbanner = async (req, res) => {
  try {
    const deletebyid = await Fbanner.deleteOne({ _id: req.params.id });
    return res.status(200).json(deletebyid);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
