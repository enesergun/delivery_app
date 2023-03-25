import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import HomeStyles from "../styles/HomeStyles";
import Star from "../constants/icons/Star";
import { useDispatch, useSelector } from "react-redux";
import Ratings from "./Ratings";

function ProductCard({ data, navigation }) {
  const { basket } = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();

  const handleAddBasket = () => {
    dispatch({ type: "ADD_TO_BASKET", payload: [...basket, data] });
  };
  return (
    <TouchableOpacity
      style={[HomeStyles.ProductCard, HomeStyles.ShadowProp]}
      onPress={() => navigation.navigate("Detail", { id: data?.idMeal })}
    >
      <Ratings />
      <View style={HomeStyles.ProductImage}>
        <Image style={HomeStyles.Image} src={data?.strMealThumb} />
      </View>
      <View style={HomeStyles.ProductNameWrapper}>
        <Text style={HomeStyles.ProductName}>{data?.strMeal}</Text>
        <Text style={HomeStyles.ProductDescription}>
          2200 gr chicken + cheese Lettuce + tomato
        </Text>
      </View>
      <View style={HomeStyles.PriceWrapper}>
        <Text style={HomeStyles.Price}>$ 22.00</Text>
        <TouchableOpacity
          style={HomeStyles.AddToBasket}
          onPress={() => handleAddBasket()}
        >
          <Text style={HomeStyles.AddButton}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default ProductCard;
