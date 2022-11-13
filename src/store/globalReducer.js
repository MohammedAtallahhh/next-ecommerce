import { actions } from "./actions";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case actions.AUTH:
      return {
        ...state,
        auth: action.payload,
      };
  }
};
