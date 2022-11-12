export default async function handler(req, res) {
  const response = await fetch("https://dummyjson.com/products?limit=20");

  const { products } = await response.json();

  res.status(200).json(products);
}
