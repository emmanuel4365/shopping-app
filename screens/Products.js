// import { Text, View } from "react-native";
import { ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const sneaker = {
    name: "Sneaker",
    image: require("../assets/sneakerr.png"),
    price: 1000,
  };
  const handBag = {
    name: "Hand Bag",
    image: require("../assets/hand-bag.png"),
    price: 500,
  };
  const dress = {
    name: "Dress",
    image: require("../assets/dress.png"),
    price: 1500,
  };
  const phone = {
    name: "Phone",
    image: require("../assets/phone.png"),
    price: 1000,
  };
  const jacket = {
    name: "Jacket",
    image: require("../assets/jacket.png"),
    price: 1000,
  };
  return (
    <>
      <ScrollView>
        <ProductCard {...sneaker} />
        <ProductCard {...handBag} />
        <ProductCard {...dress} />
        <ProductCard {...phone} />
        <ProductCard {...jacket} />
      </ScrollView>
    </>
  );
}
