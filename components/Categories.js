import React from "react";
import { View, Text, FlatList } from "react-native";
import HomeStyles from "../styles/HomeStyles";

function Categories(props) {
  return (
    <View style={HomeStyles.categoryContainer}>
      <Text style={HomeStyles.subTitle}>Categories</Text>
      <FlatList
        data={DATA}
        renderItem={props.renderItem}
        keyExtractor={(item) => item.id}
        extraData={props.selectedId}
        horizontal={true}
      />
    </View>
  );
}

export default Categories;
