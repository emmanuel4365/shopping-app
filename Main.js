import { CartContext } from "./context/cartContext";
import App from "./App";
// import { View, Text } from "react-native";

export default function Main() {
  return (
    <CartContext>
      <App />
    </CartContext>
  );
}
