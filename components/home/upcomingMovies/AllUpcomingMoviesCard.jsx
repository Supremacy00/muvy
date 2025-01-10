import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

const UpcomingMoviesCard = ({
  title,
  image,
  genre,
  duration,
  rating,
  numberOfRatings,
}) => {
  return (
    <View className="flex-1 mb-5">
      <View className="flex-1 flex-row items-center gap-3">
        <View className="w-[100px] h-[110px] rounded-xl overflow-hidden">
          <ImageBackground
            source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
            resizeMode="cover"
            className="w-full h-full"
          />
        </View>
        <View className="flex-1">
          <Text className="text-[#acabab] text-[15px] font-pmedium mb-1.5">
            Science Fiction
          </Text>
          <Text className="text-white-100 text-base font-psemibold">
            {title}
          </Text>
          <View className="flex flex-row justify-between items-center mt-4">
            <View>
              <View className="flex flex-row items-center gap-x-[1px]">
                <MaterialCommunityIcons
                  name="clock-time-three"
                  size={17}
                  color="#fff"
                />
                <View className="flex flex-row items-center gap-1">
                  <Text className="text-[#acabab] text-[15px]">120</Text>
                  <Text className="text-[#acabab] text-[15px]">{`${
                    duration <= 1 ? "Minute" : "Minutes"
                  }`}</Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row items-center gap-x-[5px]">
              <Octicons name="star-fill" size={15} color="#fbbf24" />
              <View className="flex flex-row items-center gap-x-0.5">
                <Text className="text-amber-400 text-[15px]">{rating}</Text>
                <Text className="text-[#acabab] text-[15px]">{`(${numberOfRatings})`}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpcomingMoviesCard;
