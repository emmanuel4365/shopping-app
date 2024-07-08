import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/cartReducer";

const CartStateContext = createContext();
const DispatchContext = createContext();

export const CartContext = ({ children }) => {
  //   console.log(children);
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartStateContext);
};

export const useDispatch = () => {
  return useContext(DispatchContext);
};
