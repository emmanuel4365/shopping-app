import {
  Button,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCart, useDispatch } from "../context/cartContext";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Checkout() {
  let dispatch = useDispatch();

  let navigation = useNavigation();

  const [closeModal, setCloseModal] = useState(true);

  let cartArray = useCart();

  const modalClose = () => {
    setCloseModal(false);

    dispatch({ type: "CLEAR CART" });

    navigation.navigate("products");
  };

  const removeFromCart = (index) => {
    dispatch({ type: "REMOVE", payload: { index } });
  };

  return (
    <ScrollView>
      {cartArray.map((item, index) => {
        return (
          <View style={styles.card} key={index}>
            <Image
              source={item.image}
              accessibilityLabel={`${item.name}`}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ fontWeight: 500 }}>
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(`${item.price}`)}
              </Text>
              <Button
                title="Remove From Cart"
                onPress={() => removeFromCart(index)}
              />
            </View>
          </View>
        );
      })}
      <View style={styles.card}>
        <Text style={{ textAlign: "center", fontWeight: 800 }}>
          Total cost ={" "}
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(
            cartArray.reduce((acc, curItem) => {
              return (acc += curItem.price);
            }, 0)
          )}
        </Text>
        <Button title="CHECKOUT" onPress={() => setCloseModal(true)} />
        <Modal visible={closeModal}>
          <View
            style={[
              styles.card,
              {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              },
            ]}
          >
            <Text>Order Successful</Text>
            <Button title="CLOSE" onPress={() => modalClose()} />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#333",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        textShadowRadius: 4,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  image: {
    width: "100%",
    height: 200,
  },
});
