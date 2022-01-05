let router = require("express").Router();
var Controller = require("../Controller/orderController");

router.route("/addOrder").post(Controller.addOrder);
router.route("/viewOrder/:id").get(Controller.viewOrderbyId);
router.route("/viewallOrder").get(Controller.viewallOrder);
router.route("/cancleOrder/:id").delete(Controller.cancleOrderbyId);
module.exports = router;
