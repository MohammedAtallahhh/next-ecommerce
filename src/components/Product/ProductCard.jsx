/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const ProductCard = ({ data }) => {
  const { id, title, description, price, images } = data;
  return (
    <div className="w-[100%] md:w-[45%] lg:w-[32%] xl:w-[23%] p-5 border border-black/20 hover:scale-105 hover:border-black transition-all">
      <Link href={`products/${id}`} className="flex flex-col gap-2 h-full">
        <div className="h-[120px] mb-4 flex justify-center">
          <img src={images[0]} alt={title} className="h-full" />
        </div>

        <h2 className="font-semibold text-base">{title}</h2>
        <p className="text-sm">{description.slice(0, 50)}...</p>

        <p className="font-semibold text-lg ml-2 mb-3">${price}</p>

        <button className="btn mt-auto" onClick={(e) => e.preventDefault()}>
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
