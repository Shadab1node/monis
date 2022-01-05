const multer = require("multer");
const bannerAdd = multer({ dest: "./upload/beautyAdd" });
let router = require("express").Router();
var Controller = require("../../Controller/banner/bannerController");
router
  .route("/bannerAdd")
  .post(bannerAdd.single("bannerAdd"), Controller.bannerAdd);

router.route("/getbanner").get(Controller.view);
router
  .route("/bannerUpdatebyId/:id")
  .put(bannerAdd.single("bannerAdd"), Controller.updatebanner);

router.route("/bannerdeletebyId/:id").delete(Controller.deletebanner);

module.exports = router;
