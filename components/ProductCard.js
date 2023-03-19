import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import HomeStyles from "../styles/HomeStyles";
import Star from "../constants/icons/Star";
import Ratings from "./Ratings";

function ProductCard({ data, navigation }) {
  return (
    <TouchableOpacity
      style={[HomeStyles.ProductCard, HomeStyles.ShadowProp]}
      onPress={() => navigation.navigate("Detail")}
    >
      <Ratings />
      <View style={HomeStyles.ProductImage}>
        <Image
          style={HomeStyles.Image}
          src={"https://reactnative.dev/img/tiny_logo.png"}
        />
      </View>
      <View style={HomeStyles.ProductNameWrapper}>
        <Text style={HomeStyles.ProductName}>Chicken burger</Text>
        <Text style={HomeStyles.ProductDescription}>
          2200 gr chicken + cheese Lettuce + tomato
        </Text>
      </View>
      <View style={HomeStyles.PriceWrapper}>
        <Text style={HomeStyles.Price}>$ 22.00</Text>
        <TouchableOpacity style={HomeStyles.AddToBasket}>
          <Text style={HomeStyles.AddButton}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default ProductCard;
