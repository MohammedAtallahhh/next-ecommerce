import React, { useContext, useState } from "react";
import { FormGroup, CartProduct } from "../../components";
import { GlobalContext } from "../../store/globalState";

const Cart = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");

  const { state } = useContext(GlobalContext);
  const { cart, auth } = state;

  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
  return cart.length ? (
    <div className="py-5 w-[90%] max-w-[1200px] mx-auto">
      <h2 className="title">Products in your cart.</h2>

      <div>
        <div className="mb-10 flex justify-center lg:block">
          <div className="">
            {cart.map((p) => (
              <CartProduct key={p._id} data={p} />
            ))}
          </div>
        </div>

        <footer className="p-10 bg-neutral-800 text-white mt-5">
          <form className="p-5 max-w-[500px] mb-5">
            <h2 className="text-2xl font-medium mb-5">Shipping</h2>

            <FormGroup
              label="Address"
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <FormGroup
              name="mobile"
              label="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </form>
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
    </div>
  ) : (
    <h2 className="text-2xl font-semibold py-16 px-24">
      No Products in your cart, You may want to add some.
    </h2>
  );
};

export default Cart;
