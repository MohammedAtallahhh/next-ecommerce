import Product from "../../../models/product";
import connectDB from "../../../utils/connectDB";

connectDB();

export default async function handler(req, res) {
  const products = await Product.find();

  res.status(200).json(products);
}
