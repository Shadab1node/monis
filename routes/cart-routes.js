let router = require("express").Router();
var Controller = require("../Controller/cartController");

router.route("/addcart").post(Controller.addtoCart);
router.route("/viewcart").get(Controller.viewcart);
router.route("/deletecart/:id").delete(Controller.deletecart);

module.exports = router;
