import React, { useContext } from "react";
import CartProduct from "../../components/Product/CartProduct";
import { GlobalContext } from "../../store/globalState";

const Cart = () => {
  const { state } = useContext(GlobalContext);

  const { cart, auth } = state;

  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
  return cart.length ? (
    <div className="py-5 w-[90%] max-w-[1200px] mx-auto">
      <h2 className="title">Products in your cart.</h2>

      {cart.map((p) => (
        <CartProduct key={p._id} data={p} />
      ))}

      <footer className="p-10 bg-neutral-800 text-white mt-5">
        <div className="mb-5">
          <span className="text-2xl text-gray-300 font-medium">
            TOTAL ({cart.length} items):{" "}
          </span>
          <span className="text-3xl">${totalPrice}</span>
        </div>

        <button
          disabled={!auth.user.name}
          className={`${
            !auth.user.name ? "disabled" : ""
          } btn text-xl w-[100%] max-w-[300px] rounded-none bg-purple-800 hover:bg-purple-900`}
        >
          {auth.user.name ? "" : "Sign in to "} Checkout
        </button>
      </footer>
    </div>
  ) : (
    <h2 className="text-2xl font-semibold py-16 px-24">
      No Products in your cart, You may want to add some.
    </h2>
  );
};

export default Cart;
