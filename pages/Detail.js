import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
} from "react-native";
import DetailStyles from "../styles/DetailStyles";
import HomeStyles from "../styles/HomeStyles";
import BackIcon from "../constants/icons/BackIcon";
import LikeIcon from "../constants/icons/LikeIcon";
import Ratings from "../components/Ratings";
import { getDetails } from "../store/action/detail";

function DetailScreen({ navigation, route }) {
  const { id } = route.params;
  const [details, setDetails] = useState();

  useEffect(() => {
    fetchDetails();

    return () => {
      setDetails(null);
    };
  }, []);

  const fetchDetails = async () => {
    const response = await getDetails(id);
    console.log("response", response);
    setDetails(response.meals[0]);
  };

  console.log("details", details);
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
      <ScrollView>
        <View style={DetailStyles.ProductImage}>
          <Image style={DetailStyles.Image} src={details?.strMealThumb} />
        </View>
        <View style={DetailStyles.ContentWrapper}>
          <View style={DetailStyles.TitleWrapper}>
            <Text style={DetailStyles.Title}>{details?.strMeal}</Text>
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
              <Text style={DetailStyles.AboutTitle}>Area</Text>
              <Text style={DetailStyles.AboutText}>{details?.strArea}</Text>
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
            <Text style={DetailStyles.DescriptionText}>
              {details?.strInstructions}
            </Text>
          </View>
          <View style={DetailStyles.AddBasketButtonContainer}>
            <TouchableOpacity style={DetailStyles.AddToBasketButton}>
              <Text style={DetailStyles.AddToasketButtonText}>
                Add To Basket
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailScreen;
