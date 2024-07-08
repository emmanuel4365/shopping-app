import { Text, View, StyleSheet, Platform, Image, Button } from "react-native";
import { useDispatch } from "../context/cartContext";

export default function ProductCard({ name, image, price }) {
  let dispatch = useDispatch();

  const addToCart = (item) => {
    console.log(item);
    dispatch({ type: "ADD", payload: item });
    return;
  };

  return (
    <View style={styles.card}>
      <Image
        source={image}
        accessibilityLabel={`${name}`}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontWeight: 500 }}>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(`${price}`)}
        </Text>
        <Button
          title="Add To Cart"
          onPress={() => addToCart({ name, image, price, quantity: 1 })}
        />
      </View>
    </View>
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
