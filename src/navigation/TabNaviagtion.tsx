import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Favorite from "../screens/Episode";
import CharacterScreen from "../screens/Characters";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={{
      //   tabBarActiveBackgroundColor: "red",
      //   tabBarActiveTintColor: "white",
      //   tabBarInactiveBackgroundColor: "#eee",
      //   tabBarInactiveTintColor: "black",
      //   headerShown: false,
      // }}
      >
        <Tab.Screen
          name="Character"
          component={CharacterScreen}
          options={{
            tabBarIcon: ({ color, size = 50 }) => (
              <MaterialIcons name="people-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Episode"
          component={Favorite}
          options={{
            tabBarIcon: ({ color, size = 50 }) => (
              <AntDesign name="addusergroup" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
