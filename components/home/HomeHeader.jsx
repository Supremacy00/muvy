import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import { Feather } from "@expo/vector-icons";
import useFetch from "../../hooks/useFetch";
import { ActivityIndicator } from "react-native";

const HomeHeader = () => {

  return (
    <View className="flex-1 justify-center px-4 mt-4">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center gap-3">
          <TouchableOpacity className="w-11 h-11 overflow-hidden rounded-full">
            <Image
              source={Images.profileimage}
              resizeMode="cover"
              className="w-full h-full"
            />
          </TouchableOpacity>
          <View>
            <Text className="text-[15px] text-white-300 font-pmedium">
              Welcome Back!
            </Text>
            <Text className="text-white-100 text-lg font-pbold mt-0.5">
              Tech Guru 👋
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center gap-2.5">
          <TouchableOpacity>
            <Feather name="search" size={25} color="#FBFCF8" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="bell" size={24} color="#FBFCF8" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
