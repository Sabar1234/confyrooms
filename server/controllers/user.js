const Users = require("../models/user");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.USER_EMAIL, pass: process.env.USER_PASSWORD },
});

const checkPasswordLength = (password) => {
  return password.length < 6 ? true : false;
};

const containsNumber = (password) => {
  const numbers = /[0-9]/;
  return numbers.test(password);
};

const containsSymbol = (password) => {
  const symbols = /[!@#$%^&*(){}:;?<>]/;
  return symbols.test(password);
};

//function for generating otp
const generateOtp = () => {
  return Math.floor(1000 + Math.random() * 9999);
};

//register user
const registerUser = async (req, res) => {
  try {
    const { name, email, number, password } = req.body;
    if (!name || !email || !number || !password) {
      return res
        .status(400)
        .send({ success: false, message: "All fields are required" });
    }
    if (checkPasswordLength(password)) {
      return res.status(422).send({
        success: false,
        message: "Password length must be greater than 6",
      });
    }

    if (!containsNumber(password)) {
      return res
        .status(422)
        .send({ success: false, message: "Password must contain a number" });
    }

    if (!containsSymbol(password)) {
      return res.status(422).send({
        success: false,
        message: "Password must contain one special chracter",
      });
    }

    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ success: false, message: "Email is already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    //sending otp
    const otp = generateOtp();
    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
      number,
      otp,
    });
    const info = {
      from: process.env.USER_EMAIL,
      to: email,
      subject: "Verify your OTP",
      text: `Your OTP is ${otp}`,
    };
    const savedUser = await newUser.save();
    await transport.sendMail(info);
    res.status(201).json({
      success: true,
      message: "Sign up successfully. Please verify your account with OTP",
      savedUser:savedUser,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

//verify OTP
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    console.log(`OTP is ${otp}`);
    let user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).send({ success: false, message: "No user found" });
    }
    if (user.otp !== otp) {
      return res.status(422).send({ success: false, message: "Invalid OTP" });
    }
    user.isVerified = true;
    user.otp = null;
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "Account verified successfully" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatchedPasssword = await bcrypt.compare(password, user.password);

    if (!isMatchedPasssword) {
      return res.status(422).json({
        success: false,
        message: "Incorrect password",
      });
    }
    const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    user.token = token;
    const savedUser = await user.save();
    res.cookie("token", token, {
      expires: new Date(Date.now() + 100000 * 6),
      httponly: true,
    });
    res
      .status(200)
      .json({ success: true, message: "Login successfull", user: savedUser });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

//Check Auth
const CheckAuth = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized Access!" });
  }
  const decoded = await jwt.verify(token, process.env.SECRET_KEY);
  if (decoded) {
    const user = await Users.findById(decoded.userId);
    res.json({ success: true, user });
    return;
  }
  res.json({ success: false });
};

//log out user
const logOut = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized  " });
  }
  const decoded = await jwt.verify(token, process.env.SECRET_KEY);
  if (decoded) {
    const user = await Users.findById(decoded.userId);
    user.token = null;
    await user.save();
    res.clearCookie("token");
    res.json({ success: true, message: "Logged out" });
    return;
  }
};

//fetch user data
const GetUserData = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res
        .status(403)
        .json({ success: false, message: "No user data found" });
    }
    const adminProducts = user.products;
    return res.status(200).send({
      success: true,
      message: "User Products fetched",
      adminProducts: adminProducts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  registerUser,
  CheckAuth,
  loginUser,
  logOut,
  verifyOtp,
  GetUserData,
};
//
