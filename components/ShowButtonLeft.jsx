import { TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const ShowButtonLeft = ({iconName, iconSize, type, iconColor, otherStyles}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-300 p-3 rounded-full ${otherStyles}`}
      onPress={() => router.back()}
    >{type == "MI" ? ( <MaterialIcons name={iconName} size={iconSize} color={iconColor} />) : (<AntDesign name={iconName} size={iconSize} color={iconColor} />) }
    </TouchableOpacity>
  );
};

export default ShowButtonLeft;
