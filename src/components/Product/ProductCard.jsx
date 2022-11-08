/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductCard = ({ data }) => {
  const { title, description, price, images } = data;
  return (
    <div className="flex flex-col gap-2 w-[100%] md:w-[45%] lg:w-[32%] p-10  border border-black/20 hover:scale-105 hover:border-black transition-all">
      <div className="h-[160px] mb-4 flex justify-center">
        <img src={images[0]} alt={title} className="h-full" />
      </div>

      <h2 className="font-semibold text-lg">{title}</h2>
      <p>{description.slice(0, 50)}...</p>

      <p className="font-semibold text-xl ml-2 mb-3">${price}</p>

      <button className="btn mt-auto">Add to cart</button>
    </div>
  );
};

export default ProductCard;
