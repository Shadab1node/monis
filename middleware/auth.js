const jwt = require("jsonwebtoken");
const Admin = require("../Model/admin/adminModel");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyuser = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyuser);

    const user = await Admin.fiUserndOne({ _id: verifyuser._id });
    console.log(user.name);

    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { auth };
