import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/ProductModel.js";
import {
  getProducts,
  getSingleProducts,
} from "../controllers/productControllers.js";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getSingleProducts);

export default router;
