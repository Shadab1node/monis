let router = require("express").Router();
var Controller = require("../Controller/reviewController");

router.route("/addReview").post(Controller.addReview);
router.route("/viewReview/:id").get(Controller.viewReview);
router.route("/deleteReview/:id").delete(Controller.deleteReview);
module.exports = router;
