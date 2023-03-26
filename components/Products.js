import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import HomeStyles from "../styles/HomeStyles";
import ProductCard from "./ProductCard";

import { getProducts } from "../store/action/products";

function Products({ navigation, selectedCategory, loading, setLoading }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await getProducts(selectedCategory?.strCategory);
    setProducts(response.meals);
    setLoading(false);
  };


  const renderItem = ({ item }) => {
    return <ProductCard data={item} navigation={navigation} />;
  };
  return (
    <View>
      <View style={HomeStyles.Products}>
        <FlatList
          data={products}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
        />
      </View>
    </View>
  );
}

export default Products;
