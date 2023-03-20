import React from "react";
import { TouchableOpacity, Text } from "react-native";
import HomeStyles from "../styles/HomeStyles";

const Item = ({ item, onPress, backgroundColor, textColor }) => {
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[HomeStyles.itemItem, { backgroundColor }]}
    >
      <Text style={[HomeStyles.itemTitle, { color: textColor }]}>
        {item?.strCategory}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
