import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { postData } from "../utils/fetchData";
import { actions } from "./actions";
import { initialState } from "./globalState";

export const globalReducer = (state, action) => {
  switch (action.type) {
    // ============= LOGIN ===============//
    case actions.LOGIN:
      const { user, access_token, message } = action.payload;

      toast.success(message);
      Cookies.set("refreshtoken", access_token, {
        path: "../pages/api/auth/token",
        expires: 7,
      });

      localStorage.setItem("firstLogin", true);

      return {
        ...state,
        auth: { user: user, token: access_token },
      };

    //============== LOGOUT =============//
    case actions.LOGOUT:
      Cookies.remove("refreshtoken", { path: "../pages/api/auth/token" });
      localStorage.removeItem("firstLogin");

      return {
        ...state,
        auth: initialState.auth,
      };

    case actions.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case actions.ADD_TO_CART:
      const product = action.payload;

      if (product.stock === 0) {
        toast.error("Product is out of stock!");
        return state;
      }

      const notInCart = state.cart.every((p) => p.id !== product.id);

      if (!notInCart) {
        toast.error("Product already in cart.");
        return state;
      }

      localStorage.setItem(
        "cart",
        JSON.stringify([...state.cart, { ...product, quantity: 1 }])
      );
      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }],
      };

    case actions.SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
