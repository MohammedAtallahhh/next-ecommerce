import { actions } from "./actions";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case actions.AUTH:
      const auth = action.payload;
      localStorage.setItem("auth", JSON.stringify(auth));
      return {
        ...state,
        auth,
      };
  }
};
