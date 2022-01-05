const express = require("express");
const app = express();
const Cart = require("../Model/CartModel");

exports.addtoCart = async (req, res) => {
  try {
    const cart = new Cart();
    cart.userId = req.body.userId;
    cart.products = {
      productId: req.body.productId,
      quantity: req.body.quantity,
    };
    cart.save(function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.json({
        message: "cart add Successfully",
        data: cart,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.viewcart = async (req, res) => {
  try {
    const datafind = await Cart.findOne({})
      .populate("userId")
      .populate("products.productId");

    return res.status(200).json({ datafind });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};
exports.deletecart = async (req, res) => {
  try {
    const deleteCart = await Cart.deleteOne({ _id: req.params.id });
    return res.status(200).json({ deleteCart });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};
