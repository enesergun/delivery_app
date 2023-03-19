import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";

import HomeStyles from "../styles/HomeStyles";
import ProductCard from "./ProductCard";

const DATA = [
  {
    id: "1",
    title: "Pizza",
  },
  {
    id: "2",
    title: "Burger",
  },
  {
    id: "3",
    title: "Pasta",
  },
];

function Products({ navigation}) {
  const renderItem = ({ item }) => {
    return <ProductCard data={item} navigation={navigation} />;
  };
  return (
    <View style={HomeStyles.Products}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
      />
    </View>
  );
}

export default Products;
