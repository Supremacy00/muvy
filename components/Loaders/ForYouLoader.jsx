import { View, Text } from "react-native";
import React from "react";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";

const ForYouLoader = (props) => {
  return (
    <View className="flex-1 justify-center w-[110px] h-[105px]">
      <ContentLoader
        speed={2}
        width={130}
        height={105}
        viewBox="14 16 200 90"
        backgroundColor="#111827"
        foregroundColor="#1f2937"
        {...props}
      >
        <Rect x="18" y="0" rx="16" ry="16" width="180" height="125" />
        <Rect x="18" y="137" rx="6" ry="6" width="130" height="16" />
      </ContentLoader>
    </View>
  );
};

export default ForYouLoader;
