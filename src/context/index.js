import React, { createContext, useReducer } from "react";
import { INITIAL_STATE, reducer } from "../store/reducers";

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

// To use
// In your component
// const { state, dispatch } = useContext(MyContext);
// to trigger a dispatch
// dispatch({ type: 'toggleTodoCompleted', payload: title });
