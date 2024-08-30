import express from "express";
import dotenv from "dotenv";
import connectDB from "../Backend/config/db.js";
import ProductRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

connectDB();

dotenv.config();

const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", ProductRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
