import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

const UpcomingMovieCards = ({ title, image, voteAverage, release_date }) => {
  return (
    <View className="flex-1 justify-center">
      <View className="flex-1 justify-center w-[250px] h-28 rounded-xl overflow-hidden mb-3">
        <ImageBackground
          source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
          resizeMethod="cover"
          className="w-full h-full"
        />
      </View>
      <View className="flex flex-row justify-between items-center">
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="w-28 text-white-200 text-[15px] font-pmedium"
        >
          {title}
        </Text>
        <View className="flex flex-row items-center gap-x-1.5">
          <Octicons name="star-fill" size={15} color="#fbbf24" />
          {voteAverage && (
            <Text className="text-white-200 text-[15px] font-pmedium">
              {parseFloat(voteAverage).toFixed(1)}
            </Text>
          )}
        </View>
      </View>
      <Text className="text-secondary-400 text-[12px] font-pmedium mt-0.5">{release_date}</Text>
    </View>
  );
};

export default UpcomingMovieCards;
