import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/Home";
import DetailScreen from "./pages/Detail";
import SettingsScreen from "./pages/Basket";
import ProfileScreen from "./pages/Profile";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "./constants/icons/HomeIcon";
import BasketIcon from "./constants/icons/BasketIcon";
import ProfileIcon from "./constants/icons/ProfileIcon";

import { Provider, useSelector } from "react-redux";
import { store } from "./store";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppWrapper = () => {
  const { basket } = useSelector((state) => state.basketReducer);


  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#FF9431",
            tabBarShowLabel: false,
            tabBarLabelStyle: {
              paddingTop: 10,
              borderRadius: 10,
            },
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <HomeIcon color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Basket"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Basket",
              tabBarBadge: basket?.length > 0 ? basket?.length : null,
              tabBarBadgeStyle: { backgroundColor: "#FF9431", color: "#fff"},
              tabBarIcon: ({ color, size }) => (
                <BasketIcon color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <ProfileIcon color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
