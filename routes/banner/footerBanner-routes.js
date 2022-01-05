const multer = require("multer");
const fbannerAdd = multer({ dest: "./upload/fbannerAdd" });
let router = require("express").Router();
var Controller = require("../../Controller/banner/fbannerController");
router
  .route("/fbannerAdd")
  .post(fbannerAdd.single("fbannerAdd"), Controller.fbannerAdd);

router.route("/getfbanner").get(Controller.view);
router
  .route("/fbannerUpdatebyId/:id")
  .put(fbannerAdd.single("fbannerAdd"), Controller.updatefbanner);

router.route("/fbannerdeletebyId/:id").delete(Controller.deletefbanner);

module.exports = router;
