const multer = require("multer");
const brandAdd = multer({ dest: "./upload/brandAdd" });
let router = require("express").Router();
var Controller = require("../Controller/brandsController");
router
  .route("/brandAdd")
  .post(brandAdd.single("brandAdd"), Controller.brandAdd);

router.route("/getBrand").get(Controller.view);
router
  .route("/brandUpdatebyId/:id")
  .put(brandAdd.single("brandAdd"), Controller.updateBrand);

router.route("/branddeletebyId/:id").delete(Controller.deleteBrand);

module.exports = router;
