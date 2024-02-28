const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.json({ success: false, message: "User is not logged in" });
    }
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.json({ success: false, message: "Not Authenticated" });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.send(error);
    console.log(error)
  }
};

module.exports = authenticate;
