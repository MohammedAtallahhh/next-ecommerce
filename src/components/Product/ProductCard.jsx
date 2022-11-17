/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Link from "next/link";

import { GlobalContext } from "../../store/globalState";
import { actions } from "../../store/actions";

const ProductCard = ({ data }) => {
  const { _id, title, description, price, images } = data;

  const { dispatch } = useContext(GlobalContext);

  const descriptionText = description.slice(0, 50);

  return (
    <Link
      href={`products/${_id}`}
      className="flex flex-col gap-2 w-[100%] md:w-[45%] lg:w-[32%] xl:w-[23%] p-5 border border-gray-300 hover:border-gray-600 transition-all"
    >
      <div>
        <div className="h-[120px] mb-4 flex justify-center">
          <img src={images[0]} alt={title} className="h-full" />
        </div>

        <h2 className="font-semibold text-base">{title}</h2>
        <p className="text-sm">{descriptionText}...</p>

        <p className="font-semibold text-lg ml-2 mb-3">${price}</p>

        <button
          className="btn mt-auto"
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: actions.ADD_TO_CART, payload: data });
          }}
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
