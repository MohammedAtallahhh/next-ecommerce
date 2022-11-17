import Product from "../../../models/product";
import connectDB from "../../../utils/connectDB";
import { ObjectId } from "mongodb";

connectDB();

export default async function handler(req, res) {
  const productId = req.query.id;
  const products = await Product.find();
  const isValidId = !!products.find((p) => p.id === productId);

  if (!isValidId) return res.status(404).json({ err: "Product Not Found!" });

  const product = await Product.findById(productId);
  res.status(200).json(product);
}
