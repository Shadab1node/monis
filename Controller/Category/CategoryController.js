
const express = require("express");
const app = express();
const Category = require("../../Model/Category/categoryModel");
exports.category = async (req, res) => {
  try {
    const profileImage = req.file ? req.file.filename : null;
    var category = new Category();
    category.category = req.body.category;
    category.Image = profileImage;

    category.save(function (err) {
      res.json({
        msg: "category add",
        data: category,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    var allCategory = await Category.find({});
    return res.status(200).json(allCategory);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.CategoryById = async (req, res) => {
  try {
    const categorybyID = await Category.find({ _id: req.params.id });
    return res.status(200).json(categorybyID);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = req.body.category;
    const update = await Category.findByIdAndUpdate(req.params.id, {
      category,
    });
    return res.status(200).json(update);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deletebyid = await Category.deleteOne({ _id: req.params.id });
    return res.status(200).json(deletebyid);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
