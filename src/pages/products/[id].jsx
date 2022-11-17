import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { getData } from "../../utils/fetchData";

const ProductDetails = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    if (data.err) {
      router.push("/404");
    }
  });

  // const { title } = data;
  return <h1>Details</h1>;
};

export const getServerSideProps = async (ctx) => {
  const data = await getData(`products/${ctx.query.id}`);

  return {
    props: {
      data,
    },
  };
};

export default ProductDetails;
