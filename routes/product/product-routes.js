const multer = require("multer");
const path = require("path");
var Istorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/Image");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

var imageUpload = multer({ storage: Istorage });

// Routes

let router = require("express").Router();
var Controller = require("../../Controller/product/productController");
router
  .route("/product")
  .post(imageUpload.single("productImage"), Controller.uploadProduct);
router.route("/getproduct").get(Controller.getallProduct);
router.route("/getproductbyId/:id").get(Controller.getproductbyId);

router.route("/deleteproduct/:id").delete(Controller.productdeletebyId);
router
  .route("/updateproduct/:id")
  .put(imageUpload.single("productImage"), Controller.updateproduct);
router.route("productcategorybyID/:id").get(Controller.productcategorybyId);
router.route("/searchProduct").get(Controller.search);
module.exports = router;
