import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomMovieHeader = ({
  header,
  otherStyles,
  textStyle,
  hideSeeAll,
  onPress,
}) => {
  return (
    <View
      className={`flex flex-row justify-between items-center mb-3 ${otherStyles}`}
    >
      <Text className={`text-base text-white-100 font-psemibold ${textStyle}`}>
        {header}
      </Text>
      {hideSeeAll ? (
        ""
      ) : (
        <TouchableOpacity onPress={onPress}>
          <Text className="text-[15px] text-[#4d7c0f]">See all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomMovieHeader;
