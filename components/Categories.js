import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import HomeStyles from "../styles/HomeStyles";

import { getCategories } from "../store/action/categories";


function Categories({renderItem, selectedId, setSelectedId, ...props}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await getCategories();
    setCategories(response?.categories);
    setSelectedId(response?.categories[0]);
  };

  return (
    <View style={HomeStyles.categoryContainer}>
      <Text style={HomeStyles.subTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.idCategory}
        extraData={selectedId}
        horizontal={true}
      />
    </View>
  );
}

export default Categories;
