const express = require("express");
const app = express();
const Order = require("../Model/orderModel");
const Cart = require("../Model/CartModel");

exports.addOrder = async (req, res) => {
  try {
    const order = new Order();
    order.cartId = req.body.cartId;
    order.addressId = req.body.addressId;
    order.save(function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.json({
        message: "order Successfully",
        data: order,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.viewOrderbyId = async (req, res) => {
  try {
    var userId = req.body.userId;
    var findData = await Cart.find({ userId: userId });
    if (findData) {
      let dataShow = await Order.find({})
        .populate("cartId")
        .populate("addressId");
      return res.status(200).json({ dataShow });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.viewallOrder = async (req, res) => {
  try {
    let allOrder = await Order.find({})
      .populate("cartId")
      .populate("addressId");
    return res.status(200).json({ allOrder });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};
exports.cancleOrderbyId = async (req, res) => {
  try {
    let cancleOrder = await Order.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json({ cancleOrder });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};
