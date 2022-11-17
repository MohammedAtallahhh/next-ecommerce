import React, { useState } from "react";
import ProductAmount from "./ProductAmount";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CartProduct = ({ data }) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const goNext = () => {
    const length = data.images.length;
    sliderIndex < length - 1 && setSliderIndex(sliderIndex + 1);
  };

  const goPrev = () => {
    sliderIndex > 0 && setSliderIndex(sliderIndex - 1);
  };

  const { _id, title, description, quantity, price, images } = data;

  return (
    <div className="flex justify-between items-stretch py-10 border-b border-gray-300">
      {/* Product details */}
      <div className="flex-grow">
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-gray-700 max-w-[50ch]">{description}</p>

        <h4 className="text-2xl font-semibold my-3">${price}</h4>
      </div>

      {/* Product Amount */}
      <ProductAmount isLarge={true} quantity={quantity} id={_id} />

      {/* Product gallery */}
      <div className="relative w-60 h-48 overflow-hidden ml-10">
        <div className="">
          <div
            className="flex transition-all"
            style={{ translate: `${-100 * sliderIndex}%` }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="product slide"
                className="slider__img"
              />
            ))}
          </div>

          <div className="absolute flex gap-2 right-3 bottom-3">
            <button
              className="cursor-pointer bg-white border border-gray-900 p-1 rounded-full"
              onClick={goPrev}
            >
              <AiOutlineLeft />
            </button>
            <button
              className="cursor-pointer bg-white border border-gray-900 p-1 rounded-full"
              onClick={goNext}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
