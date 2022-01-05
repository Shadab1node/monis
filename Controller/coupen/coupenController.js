const express = require("express");
const app = express();
const Coupen = require("../../Model/coupen/coupenModel");

exports.addCoupen = async (req, res) => {
  try {
    const coupen = new Coupen();
    coupen.code = req.body.code;
    coupen.offerDetail = req.body.offerDetail;
    coupen.expireIn = new Date().getTime() + 300 * 1000;
    coupen.save(function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.json({
        message: "code add Successfully",
        data: coupen,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.getCoupen = async (req, res) => {
  try {
    const viewCoupen = await Coupen.find({});
    return res.status(200).json({ viewCoupen });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};
exports.getCoupenbyId = async (req, res) => {
  try {
    const viewCoupen = await Coupen.find({ _id: req.params.id });
    return res.status(200).json({ viewCoupen });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.deleteCoupen = async (req, res) => {
  try {
    const viewCoupen = await Coupen.deleteOne({});
    return res.status(200).json({ viewCoupen });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.updateCoupen = async (req, res) => {
  try {
    const { code, offerDetail } = req.body;
    const editCoupen = await Coupen.findByIdAndUpdate(req.params.id, {
      code,
      offerDetail,
    });
    return res.status(200).json({ editCoupen });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};
