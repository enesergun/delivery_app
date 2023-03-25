import React from "react";
import { View, TextInput } from "react-native";
import HomeStyles from "../styles/HomeStyles";
import FilterIcon from "../constants/icons/FilterIcon";
import { getSearchResult } from "../store/action/search";

function Search({ searchText, setSearchText }) {
  const handleSearch = async (text) => {
    setSearchText(text);
    /* const response = await getSearchResult(text); */
  };
  return (
    <View style={HomeStyles.inputContainer}>
      <View style={HomeStyles.inputWrapper}>
        <TextInput
          autoCapitalize="none"
          placeholder="Search"
          style={HomeStyles.input}
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      <View style={HomeStyles.filter}>
        <FilterIcon />
      </View>
    </View>
  );
}

export default Search;
