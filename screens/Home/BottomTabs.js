import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#1e188f",
        inactiveTintColor: "gray",
        labelStyle: { display: "none" },
        tabBarStyle: {
          display: "flex",
          height: 100,
          backgroundColor: "yellow",
        },
      }}
    >
      <Tab.Screen
        name="Section1"
        component={Section1}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Section2"
        component={Section2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="comments" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Section3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                backgroundColor: "#1e188f",
                borderRadius: 50,
                width: 60,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <FontAwesome name="plus" color="white" size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Section4"
        component={Section4}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cogs" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Section4}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
