import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, StatusBar } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Products from "./screens/Products";
import Checkout from "./screens/Checkout";
import { useCart } from "./context/cartContext";

export default function App() {
  const Tab = createBottomTabNavigator();

  let arr = useCart();
  console.log(arr);

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="products"
          component={Products}
          options={{
            tabBarIcon: () => <Feather name="grid" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="checkout"
          component={Checkout}
          options={{
            tabBarIcon: () => (
              <AntDesign name="shoppingcart" size={24} color="black" />
            ),
            tabBarBadge: arr.length,
          }}
        />
      </Tab.Navigator>
      <StatusBar backgroundColor="midnightblue" barStyle="light-content" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
