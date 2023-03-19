import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import DetailStyles from "../styles/DetailStyles";
import HomeStyles from "../styles/HomeStyles";
import BackIcon from "../constants/icons/BackIcon";
import LikeIcon from "../constants/icons/LikeIcon";
import Ratings from "../components/Ratings";

function DetailScreen({ navigation }) {
  return (
    <SafeAreaView style={DetailStyles.container}>
      <View style={DetailStyles.header}>
        <TouchableOpacity
          style={DetailStyles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <BackIcon />
        </TouchableOpacity>
        <TouchableOpacity style={DetailStyles.likeButton}>
          <LikeIcon />
        </TouchableOpacity>
      </View>
      <View style={DetailStyles.ProductImage}>
        <Image
          style={DetailStyles.Image}
          src={"https://reactnative.dev/img/tiny_logo.png"}
        />
      </View>
      <View style={DetailStyles.ContentWrapper}>
        <View style={DetailStyles.TitleWrapper}>
          <Text style={DetailStyles.Title}>Chicken Burger</Text>
          <Ratings reviews={true} />
        </View>
        <View style={DetailStyles.PriceCountWrapper}>
          <Text style={DetailStyles.Price}>$ 22.00</Text>
          <View style={DetailStyles.BasketCount}>
            <TouchableOpacity style={DetailStyles.CountButtons}>
              <Text style={DetailStyles.Minus}>-</Text>
            </TouchableOpacity>
            <Text style={DetailStyles.Count}>1</Text>
            <TouchableOpacity style={DetailStyles.CountButtons}>
              <Text style={DetailStyles.Plus}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={DetailStyles.AboutOrder}>
          <View style={DetailStyles.AboutCard}>
            <Text style={DetailStyles.AboutTitle}>Size</Text>
            <Text style={DetailStyles.AboutText}>Medium</Text>
          </View>
          <View style={DetailStyles.AboutCard}>
            <Text style={DetailStyles.AboutTitle}>Energy</Text>
            <Text style={DetailStyles.AboutText}>543 Kcal</Text>
          </View>
          <View style={DetailStyles.AboutCard}>
            <Text style={DetailStyles.AboutTitle}>Delivery</Text>
            <Text style={DetailStyles.AboutText}>45 Min</Text>
          </View>
        </View>
        <View style={DetailStyles.DescriptionWrapper}>
          <Text style={DetailStyles.DescriptionTitle}>About</Text>
          <Text style={DetailStyles.DescriptionText}>Lorem dolor sit amet</Text>
        </View>
        <View style={DetailStyles.AddBasketButtonContainer}>
          <TouchableOpacity style={DetailStyles.AddToBasketButton}>
            <Text style={DetailStyles.AddToasketButtonText}>Add To Basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DetailScreen;
