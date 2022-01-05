let router = require("express").Router();
const auth = require("../../middleware/auth");

var Controller = require("../../Controller/admin/adminController");
router.route("/register", auth).post(Controller.adminRegister);
router.route("/login", auth).post(Controller.adminLogin);
router.route("/mailSend").post(Controller.mailSend);
router.route("/forgotPassword").post(Controller.forgotPassword);

module.exports = router;
