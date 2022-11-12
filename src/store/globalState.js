import { createContext, useReducer } from "react";
import { globalReducer } from "./globalReducer";

const GlobalContext = createContext();

const initialState = {
  auth: {},
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
