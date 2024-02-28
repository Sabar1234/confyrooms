const {
  registerUser,
  logOut,
  loginUser,
  verifyOtp,
  CheckAuth,
  GetUserData,
} = require("../controllers/user");
const authenticate = require("../middleware/auth");
const router = require("express").Router();

router
  .post("/sign-up", registerUser)
  .post("/verify-otp", verifyOtp)
  .post("/login", loginUser, authenticate)
  .get("/check-auth", CheckAuth)
  .get("/log-out", logOut)
  .get("/authenticate", authenticate)
  .get("/admin-products", GetUserData);

module.exports = router;
