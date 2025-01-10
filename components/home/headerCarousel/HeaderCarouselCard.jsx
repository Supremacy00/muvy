import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

const HeaderCarouselCard = ({ title, image, genre }) => {
  return (
    <View
      style={{ width: width, paddingHorizontal: 16 }}
      className="flex-1 justify-center items-center mt-6"
    >
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
        resizeMethod="cover"
        className="flex-1 w-[100%] h-[180px] rounded-2xl overflow-hidden"
      >
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.25 }}
          locations={[, 1]}
          colors={["#4d7c0f", "transparent"]}
          style={{ ...StyleSheet.absoluteFillObject }}
        />
        <View className="absolute bottom-[68px] left-5 bg-[#a1a1aa] rounded-full px-3.5 py-[7px] bg-opacity-30">
          <Text className="text-white-300 text-[12px] font-psemibold">
            {genre}
          </Text>
        </View>
        <Text className="absolute bottom-9 left-5 text-white-200 text-xl font-psemibold">
          {title}
        </Text>
        <TouchableOpacity className="absolute bottom-7 right-5 bg-white-200 rounded-full p-2.5">
          <Entypo name="controller-play" size={30} color="#4d7c0f" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HeaderCarouselCard;
