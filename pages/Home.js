import React, { useState } from "react";
import { DATA } from "../constants/categoryData";
import { SafeAreaView, View } from "react-native";
import HomeStyles from "../styles/HomeStyles";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Item from "../components/Item";
import Products from "../components/Products";

function HomeScreen({ navigation}) {
  const [selectedId, setSelectedId] = useState();
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#FF9431" : "#fff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={HomeStyles.container}>
     <View style={HomeStyles.pageWrapper}>
     <Header />
      <Search />
      <Categories selectedId={selectedId} renderItem={renderItem} />
      <Products navigation={navigation} />
     </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
