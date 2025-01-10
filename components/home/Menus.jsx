import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Menus = () => {
  return (
    <View className="px-4 mt-7">
      <View className="flex flex-row justify-center gap-3">
        <TouchableOpacity className="flex flex-col justify-center items-center  bg-[#18181b] p-5 rounded-xl">
          <View className="bg-white-200 p-1 rounded-full mb-1.5">
          <Entypo name="grid" size={30} color="#4d7c0f" />
          </View>
          <Text className="text-white-300 text-center text-sm font-pmedium">Genre</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-col justify-center items-center bg-[#18181b] p-5 rounded-xl">
          <View className="bg-white-200 p-1.5 rounded-full mb-1.5">
          <Ionicons name="videocam" size={25} color="#4d7c0f" />
          </View>
          <Text className="text-white-300 text-center text-sm font-pmedium">Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-col justify-center items-center  bg-[#18181b] p-5 rounded-xl">
          <View className="bg-white-200 p-1.5 rounded-full mb-1.5">
          <MaterialCommunityIcons name="gamepad-up" size={26} color="#4d7c0f" />
          </View>
          <Text className="text-white-300 text-center text-sm font-pmedium">Go Pro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menus;
