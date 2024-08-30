import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/ProductModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find({});
  res.json(allProducts);
});

const getSingleProducts = asyncHandler(async (req, res) => {
  const singleProduct = await Product.findById(req.params.id);

  if (singleProduct) {
    return res.json(singleProduct);
  }

  res.status(404);
  throw new Error("product not found");
});

export { getProducts, getSingleProducts };
