import { ProductList } from "../components";
import Layout from "../components/Layout";

export default function Home({ products }) {
  return (
    <Layout>
      <ProductList data={products} />
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
