import React, { useState, useEffect } from "react";
import { DATA } from "../constants/categoryData";
import { SafeAreaView, View, ActivityIndicator } from "react-native";
import HomeStyles from "../styles/HomeStyles";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Item from "../components/Item";
import Products from "../components/Products";

import { getCategories } from "../store/action/categories";

function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.idCategory === selectedCategory?.idCategory ? "#FF9431" : "#fff";
    const color =
      item.idCategory === selectedCategory?.idCategory ? "white" : "black";
    return (
      <Item
        item={item}
        onPress={() => setSelectedCategory(item)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={HomeStyles.container}>
      {loading && (
        <View style={HomeStyles.loading}>
          <ActivityIndicator size="large" color={"#FF9431"} />
        </View>
      )}
      <View style={HomeStyles.pageWrapper}>
        <Header />
        <Search searchText={searchText} setSearchText={setSearchText} />
        {!searchText && (
          <Categories
            selectedId={selectedCategory?.idCategory}
            renderItem={renderItem}
            setSelectedId={setSelectedCategory}
          />
        )}
        <Products
          navigation={navigation}
          selectedCategory={selectedCategory}
          loading={loading}
          setLoading={setLoading}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
