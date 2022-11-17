import React from "react";

const ProductAmount = ({ isLarge, quantity }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      {/* Increase button */}
      <button className="relative w-8 h-8 bg-none border border-black cursor-pointer after:content-[''] after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:bg-black after:w-4 after:h-[1px] before:content-[''] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-black before:w-4 before:h-[1px] before:rotate-[90deg]"></button>

      {/* quantity */}
      <h5 className="text-2xl font-semibold">{quantity}</h5>

      {/* Decrease button */}
      <button className="relative w-8 h-8 border border-black bg-none cursor-pointer after:content-[''] after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:bg-black after:w-4 after:h-[1px]"></button>
    </div>
  );
};

export default ProductAmount;
