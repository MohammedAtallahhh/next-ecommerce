import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <main className="py-5 w-[90%] max-w-[1200px] mx-auto">
      <h2 className="text-5xl font-semibold my-10">Our products</h2>

      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-10">
        {data.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </ul>
    </main>
  );
};

export default ProductList;
