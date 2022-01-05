const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const Banner = require("../../Model/banner/bannerModel");

exports.bannerAdd = async (req, res) => {
  try {
    const bannerImage = req.file ? req.file.filename : null;
    var banner = new Banner();
    banner.bannerAdd = bannerImage;
    banner.save(function (err) {
      res.json({
        message: "banner add Successfully",
        data: banner,
      });
    });
  } catch (error) {
    res.json({
      message: "Error find in when adding the banner",
    });
  }
};

exports.view = async (req, res) => {
  try {
    const viewAllUser = await Banner.find({});
    return res.status(200).json(viewAllUser);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.updatebanner = async (req, res) => {
  const bannerAdd = req.body.bannerAdd;
  try {
    const update = await Banner.findByIdAndUpdate(req.params.id, {
      bannerAdd,
    });
    return res.status(200).json(update);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deletebanner = async (req, res) => {
  try {
    const deletebyid = await Banner.deleteOne({ _id: req.params.id });
    return res.status(200).json(deletebyid);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
