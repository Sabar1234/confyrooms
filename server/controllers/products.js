const mongoose = require("mongoose");
const Products = require("../models/product");
const Users = require("../models/user");

const addProduct = async (req, res) => {
  try {
    const {
      price,
      description,
      location,
      imageUrl,
      category,
      contact,
      email,
      landmark,
    } = req.body;
    if (
      !price ||
      !description ||
      !location ||
      !imageUrl ||
      !category ||
      !contact ||
      !landmark
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const newProduct = new Products({
      price,
      description,
      location,
      contact,
      imageUrl,
      category,
      landmark,
    });
    const savedProduct = await newProduct.save();

    // function for saving products inside user
    const user = await Users.findOne({ email });
    const userId = user._id;
    const updatedUser = await Users.findByIdAndUpdate(
      userId,
      { $push: { products: savedProduct } },
      { new: true }
    );
    user.products = await updatedUser;
    res.status(201).json({
      success: true,
      message: "Property uploaded",
      addedProduct: savedProduct,
      userProduct: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

//fetch all products
const getProducts = async (req, res) => {
  try {
    const product = await Products.find();
    if (!product) {
      return res
        .status(400)
        .json({ success: false, message: "Products not found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// get single product
const getSingleProduct = async (req, res) => {
  try {
    // console.log("hi");
    const id = req.params.id;
    const product = await Products.findById(id);
    if (!product) {
      return res
        .status(400)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product fetched", product });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

//update product info
const updateProduct = async (req, res) => {
  try {
    const { userId } = req.params;
    const { id } = req.body;
    const { price } = req.body;
    console.log("Price", price);
    // console.log(id);

    const updatedProduct = await Users.findByIdAndUpdate(
      userId,
      { $set: { products: price } },
      { new: true },
      { runValidator: true }
    );
    console.log(updateProduct);

    if (!updatedProduct) {
      return res
        .status(400)
        .json({ success: false, message: "Failed to update" });
    }
    console.log(updatedProduct);
    return res.status(400).json({
      success: true,
      message: "Successfully updated",
      updatedProduct: updatedProduct,
      userProduct: updatedProduct,
    });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

//delete product
// const deleteProduct = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     const { productIndex } = req.params;
//     const user = await Users.findById(userId);
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: "User not found! Please Log in again.",
//       });
//     }
//     const deletedProduct = await Users.products.findById(id);
//     if (!deletedProduct) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Failed to Delete" });
//     }
//     res
//       .status(200)
//       .json({ success: true, message: "Successfully deleted Product" });
//   } catch (error) {
//     res.send(error.message);
//   }
// };

const deleteProduct = async (req, res) => {
  try {
    const { userId } = req.body;
    const { productIndex } = req.params;

    const user = await Users.findById(userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found! Please log in again.",
      });
    }

    // Find the index of the product in the array
    // const productIndex = user.products.findIndex((product) => product._id == productId);

    // Check if the product is found
    if (productIndex === -1) {
      return res.status(400).json({ success: false, message: "Product not found" });
    }

    // Use $pull to remove the specific product from the array
    user.products.splice(productIndex, 1);

    // Save the updated user document
    await user.save();

    res.status(200).json({ success: true, message: "Successfully deleted product" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


module.exports = {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
