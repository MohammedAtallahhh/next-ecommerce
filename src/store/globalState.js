import { createContext, useEffect, useReducer } from "react";

import { globalReducer } from "./globalReducer";
// import { getData } from "../utils/fetchData";
import { getData } from "../utils/fetchData";
import { actions } from "./actions";

export const GlobalContext = createContext();

export const initialState = {
  auth: { user: {} },
  cart: [],
  loading: false,
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    // ========== Saving the user state to localStorage ==========//
    dispatch({
      type: actions.LOGIN,
      payload: JSON.parse(localStorage.getItem("auth")) || initialState.auth,
    });

    // const firstLogin = localStorage.getItem("firstLogin");
    // if (firstLogin) {
    //   getData("auth/token").then((res) => {
    //     console.log({ res });
    //     if (res.err) return localStorage.removeItem("firstLogin");
    //     dispatch({
    //       type: actions.LOGIN,
    //       payload: {
    //         token: res.access_token,
    //         user: res.user,
    //       },
    //     });
    //   });
    // }

    // getData("categories").then((res) => {
    //   if (res.err)
    //     return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    //   dispatch({
    //     type: "ADD_CATEGORIES",
    //     payload: res.categories,
    //   });
    // });
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (cart && cart.length) {
      dispatch({
        type: actions.SET_CART,
        payload: cart,
      });
    }
  }, []);

  // useEffect(() => {
  //   const __next__cart01__devat = JSON.parse(
  //     localStorage.getItem("__next__cart01__devat")
  //   );

  //   if (__next__cart01__devat)
  //     dispatch({ type: "ADD_CART", payload: __next__cart01__devat });
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("__next__cart01__devat", JSON.stringify(cart));
  // }, [cart]);

  // useEffect(() => {
  //   if (auth.token) {
  //     getData("order", auth.token).then((res) => {
  //       if (res.err)
  //         return dispatch({ type: "NOTIFY", payload: { error: res.err } });

  //       dispatch({ type: "ADD_ORDERS", payload: res.orders });
  //     });

  //     if (auth.user.role === "admin") {
  //       getData("user", auth.token).then((res) => {
  //         if (res.err)
  //           return dispatch({ type: "NOTIFY", payload: { error: res.err } });

  //         dispatch({ type: "ADD_USERS", payload: res.users });
  //       });
  //     }
  //   } else {
  //     dispatch({ type: "ADD_ORDERS", payload: [] });
  //     dispatch({ type: "ADD_USERS", payload: [] });
  //   }
  // }, [auth.token]);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
