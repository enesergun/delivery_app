import React from "react";
import { View, Text } from "react-native";
import HomeStyles from "../styles/HomeStyles";
import DeliveryIcon from "../constants/icons/DeliveryIcon";


function Header() {
  return (
    <View style={HomeStyles.titleContainer}>
      <Text style={HomeStyles.title}>Order Your Food Fast and Free</Text>
      <View style={HomeStyles.icon}>
        <DeliveryIcon />
      </View>
    </View>
  );
}

export default Header;
