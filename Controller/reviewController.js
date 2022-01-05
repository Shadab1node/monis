const express = require("express");
const app = express();
const Review = require("../Model/reviewModel");

exports.addReview = async (req, res) => {
  try {
    const review = new Review();
    review.userId = req.body.userId;
    review.productId = req.body.productId;
    review.review = req.body.review;
    review.notes = req.body.notes;
    review.save(function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.json({
        message: "review add Successfully",
        data: review,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.viewReview = async (req, res) => {
  try {
    const datafind = await Review.findById({ _id: req.params.id })
      .populate("userId")
      .populate("productId");
    return res.status(200).json({ datafind });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const viewCoupen = await Review.deleteOne({});
    return res.status(200).json({ viewCoupen });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};
