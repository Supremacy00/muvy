import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import {
  AntDesign,
  Feather,
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

const TabsLayout = () => {
  const TabBar = ({ color, title, focused, name }) => {
    return (
      <View className={`relative justify-center items-center`}>
        <View>
          {name == "home" ? (
            <Foundation name={name} size={24} color={color} />
          ) : name == "download-circle-outline" ? (
            <MaterialCommunityIcons name={name} size={24} color={color} />
          ) : name == "favorite-outline" ? (
            <MaterialIcons name={name} size={24} color={color} />
          ) : (
            name == "user" && <Feather name={name} size={25} color={color} />
          )}
        </View>
        <Text
          className={`text-[11px] font-psemibold ${
            focused ? "text-white-200" : "text-[#a3a3a3]"
          }`}
        >
          {title}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#a3a3a3",
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          position: "absolute",
          height: 84,
          borderTopWidth: 0,
       
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={90}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: "hidden",
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBar color={color} focused={focused} name="home" title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="downloads"
        options={{
          title: "Download",
          tabBarIcon: ({ color, focused }) => (
            <TabBar
              color={color}
              focused={focused}
              name="download-circle-outline"
              title="Downloads"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          tabBarIcon: ({ color, focused }) => (
            <TabBar
              color={color}
              focused={focused}
              name="favorite-outline"
              title="Favorite"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBar
              color={color}
              focused={focused}
              name="user"
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
