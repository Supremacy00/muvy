import { TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const ShowButtonRight = ({iconName, iconSize, iconColor, otherStyles}) => {
  return (
    <TouchableOpacity className={`bg-secondary-300 p-3 rounded-full ${otherStyles}`}>
      <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default ShowButtonRight;
