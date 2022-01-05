let router = require("express").Router();
var Controller = require("../../Controller/coupen/coupenController");

router.route("/addCoupen").post(Controller.addCoupen);
router.route("/getCoupen").get(Controller.getCoupen);
router.route("/deleteCoupen/:id").delete(Controller.deleteCoupen);
router.route("/updateCoupen/:id").put(Controller.updateCoupen);
router.route("/getCoupenbyId/:id").get(Controller.getCoupenbyId);
module.exports = router;
