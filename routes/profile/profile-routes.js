const multer = require("multer");
let router = require("express").Router();
const auth = require("../../middleware/auth");
var Controller = require("../../Controller/profile/profileController");
router.route("/profileregister").post(Controller.profileRegister);
router.route("/profilelogin").post(Controller.profileLogin);
router.route("/profilemailSend").post(Controller.profilemailSend);
router.route("/profileforgotPassword").post(Controller.profileforgotPassword);
const imageUpload = multer({ dest: "./upload/Image" });
router
  .route("/UpdateProfile/:id")
  .put(imageUpload.single("Image"), Controller.UpdateProfile);
module.exports = router;
