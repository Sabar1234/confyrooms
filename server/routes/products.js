const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const authenticate = require("../middleware/auth");
const router = require("express").Router();

router
  .post("/add-product", authenticate, addProduct)
  .get("/products", getProducts)
  .get("/product/:id", getSingleProduct)
  .patch("/update/:id", updateProduct)
  .delete("/delete/:productIndex", deleteProduct);

module.exports = router;
