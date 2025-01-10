import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";

const TruncatedText = ({ overview, maxLength = 250 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const renderText = () => {
    if (isExpanded) {
      return (
        <Text className="text-white-300 text-[15px] font-pmedium leading-6 mt-3">
          {overview} <Text
            className="text-[#4d7c0f] text-[15px] font-psemibold"
            onPress={toggleText}
          >
            Show Less
          </Text>
        </Text>
      );
    } else {
      if (overview?.length > maxLength) {
        return (
          <Text className="text-white-300 text-[15px] font-pmedium leading-6 mt-3">
            {overview?.substring(0, maxLength)}... <Text
              className="text-[#4d7c0f] text-[15px] font-psemibold"
              onPress={toggleText}
            >
              Read More
            </Text>
            {overview?.overview}
          </Text>
        );
      } else {
        return <Text className="text-white-300 text-[15px] font-pmedium leading-6 mt-3">{overview}</Text>;
      }
    }
  };

  return <View>{renderText()}</View>;
};

export default TruncatedText;
