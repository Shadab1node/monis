let router = require("express").Router();
var Controller = require("../Controller/addressController");
router.route("/addAddress").post(Controller.addAddress);

router.route("/viewAddress").get(Controller.viewAddress);
router.route("/viewAddressbyId/:id").get(Controller.viewAddressbyId);

router.route("/updateAddress/:id").patch(Controller.updateAddress);
router.route("/deleteAddress/:id").delete(Controller.deleteAddress);

module.exports = router;
