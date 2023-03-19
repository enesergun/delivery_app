import React from "react";
import { View, Text } from "react-native";
import HomeStyles from "../styles/HomeStyles";
import Star from "../constants/icons/Star";

function Ratings({reviews}) {
  return (
    <View style={HomeStyles.Rating}>
      <Star />
      <Text style={HomeStyles.RatingText}>4.8</Text>
      {!!reviews && (
        <Text style={HomeStyles.ReviewsText}>48 Reviews</Text>
      )}
    </View>
  );
}

export default Ratings;
