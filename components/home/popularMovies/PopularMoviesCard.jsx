import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { router } from "expo-router";

const PopularMoviesCard = ({ title, image, item }) => {
  return (
    <View className="flex-1 justify-center">
      <View className="flex-1 justify-center w-[110px] h-36 rounded-xl overflow-hidden mb-3">
        <ImageBackground
          source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
          resizeMethod="cover"
          className="w-full h-full"
        />
      </View>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className="flex-1 w-28 text-white-200 text-[15px] font-pmedium"
      >
        {title}
      </Text>
    </View>
  );
};

export default PopularMoviesCard;
