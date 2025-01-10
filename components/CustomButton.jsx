import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, otherStyles }) => {
  return (
      <TouchableOpacity className={`bg-[#4d7c0f] w-full py-3.5 rounded-full ${otherStyles}`}>
        <Text className="text-center text-base font-psemibold text-white-200">
          {title}
        </Text>
      </TouchableOpacity>
  );
};

export default CustomButton;
