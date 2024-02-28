const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  landmark: { type: String, required: true },
});

const Products = new mongoose.model("product", productSchema);
module.exports = Products;
