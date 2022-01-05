require("./Config/database");
let express = require("express");
let bodyParser = require("body-parser");
const cors = require("cors");
let app = express();
app.use(
  cors({
    origin: "*",
  })
);

let adminRoutes = require("./routes/admin/admin-routes");
let bannerRoutes = require("./routes/banner/banner-routes");
let footerBannerRoutes = require("./routes/banner/footerBanner-routes");
let adressRoutes = require("./routes/address-routes");
let coupenRoutes = require("./routes/coupen/coupen-routes");
let profileRoutes = require("./routes/profile/profile-routes");
let categoryRoutes = require("./routes/Category/category-routes");
let productRoutes = require("./routes/product/product-routes");
let brandRoutes = require("./routes/brand-routes");
let cart_Routes = require("./routes/cart-routes");
let reviewRoutes = require("./routes/review-routes");
let orderRoutes = require("./routes/order-routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
app.use(
  "/api",
  orderRoutes,
  cart_Routes,
  reviewRoutes,
  brandRoutes,
  categoryRoutes,
  productRoutes,
  adminRoutes,
  bannerRoutes,
  footerBannerRoutes,
  adressRoutes,
  coupenRoutes,
  profileRoutes
);
app.listen(port, function () {
  console.log("Running on port " + port);
});
module.exports = app;
