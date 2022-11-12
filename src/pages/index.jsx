import Head from "next/head";
import { ProductList } from "../components";
import { getData } from "../utils/fetchData";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <ProductList data={products} />;
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const products = await getData("/products");

  return {
    props: {
      products,
    },
  };
};
