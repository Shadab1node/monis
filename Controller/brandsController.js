const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const Brand = require("../Model/brandsModel");

exports.brandAdd = async (req, res) => {
  try {
    const brandImage = req.file ? req.file.filename : null;
    var brand = new Brand();
    brand.brandAdd = brandImage;
    brand.save(function (err) {
      res.json({
        message: "Brand add Successfully",
        data: brand,
      });
    });
  } catch (error) {
    res.json({
      message: "Error find in when adding the Brand",
    });
  }
};

exports.view = async (req, res) => {
  try {
    const viewAllBrand = await Brand.find({});
    return res.status(200).json(viewAllBrand);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.updateBrand = async (req, res) => {
  const brandAdd = req.body.bannerAdd;
  try {
    const update = await Brand.findByIdAndUpdate(req.params.id, {
      brandAdd,
    });
    return res.status(200).json(update);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    const deletebyid = await Brand.deleteOne({ _id: req.params.id });
    return res.status(200).json(deletebyid);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
