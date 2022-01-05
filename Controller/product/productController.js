const express = require("express");
const app = express();
const Product = require("../../Model/product/productModel");

exports.uploadProduct = async (req, res) => {
  try {
    const productImage = req.file.path;
    var product = new Product();
    product.productName = req.body.productName;
    product.price = req.body.price;
    product.Description = req.body.Description;
    product.notes = req.body.notes;
    product.CategoryId = req.body.CategoryId;
    product.productImage = productImage;
    product.save(function (err) {
      res.json({
        message: "product uploaded Successfully",
        data: product,
      });
    });
  } catch (error) {
    res.json({
      message: "Error find in when uploading a product",
    });
  }
};

exports.getallProduct = async (req, res) => {
  try {
    const getallProduct = await Product.find();
    return res.status(200).json(getallProduct);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.getproductbyId = async (req, res) => {
  try {
    const getproductbyId = await Product.find({ _id: req.params.id }).populate(
      "CategoryId"
    );
    return res.status(200).json(getproductbyId);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.productdeletebyId = async (req, res) => {
  try {
    const deletebyid = await Product.deleteOne({ _id: req.params.id });
    return res.status(200).json(deletebyid);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.updateproduct = async (req, res) => {
  const { productName, price, Description, notes } = req.body;
  try {
    const update = await Product.findByIdAndUpdate(req.params.id, {
      productName,
      price,
      Description,
      notes,
    });
    console.log(update);
    return res.status(200).json(update);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.productcategorybyId = async (req, res) => {
  try {
    const productCategorybyID = await Product.find({
      CategoryId: req.params.id,
    });
    return res.status(200).json(productCategorybyID);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.search = async (req, res) => {
  try {
    const searchtext = await Product.find({
      $text: { $search: "Lipsum" },
    });
    return res.status(200).json(searchtext);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
