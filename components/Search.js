import React from "react";
import { View, TextInput } from "react-native";
import HomeStyles from "../styles/HomeStyles";
import FilterIcon from "../constants/icons/FilterIcon";

function Search() {
  return (
    <View style={HomeStyles.inputContainer}>
      <View style={HomeStyles.inputWrapper}>
        <TextInput placeholder="Search" style={HomeStyles.input} />
      </View>
      <View style={HomeStyles.filter}>
        <FilterIcon />
      </View>
    </View>
  );
}

export default Search;
