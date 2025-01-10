import React from "react";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";
import { View } from "react-native";

const UpcomingMoviesLoader = (props) => {
  return (
    <View className="flex-1 justify-center w-[430px] h-[127px]">
      <ContentLoader
        speed={2}
        width={430}
        height={135}
        viewBox="14 2 410 110"
        backgroundColor="#111827"
        foregroundColor="#1f2937"
        {...props}
      >
        <Rect x="18" y="0" rx="16" ry="16" width="100" height="110" />
        <Rect x="130" y="20" rx="5" ry="5" width="80" height="10" />
        <Rect x="130" y="50" rx="6" ry="6" width="130" height="10" />
        <Rect x="130" y="80" rx="6" ry="6" width="100" height="10" />
        <Rect x="350" y="80" rx="6" ry="6" width="40" height="10" />
      </ContentLoader>
    </View>
  );
};

export default UpcomingMoviesLoader;
