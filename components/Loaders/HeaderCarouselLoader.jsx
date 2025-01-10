import React from "react";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";
import { View } from "react-native";

const HeaderCarouselLoader = (props) => {
  return (
    <View className="flex-1 justify-center w-[430px] h-[230px]">
    <ContentLoader 
    speed={2}
    width={430}
    height={260}
    viewBox="2 14 410 110"
    backgroundColor="#111827"
    foregroundColor="#1f2937"
    {...props}
  >
    <Rect x="18" y="0" rx="16" ry="16" width="377" height="130" /> 
    <Rect x="18" y="145" rx="19" ry="19" width="120" height="35" /> 
    <Rect x="20" y="195" rx="6" ry="6" width="200" height="12" /> 
    <Circle cx="376" cy="180" r="20" />
  </ContentLoader>
  </View>
  );
};

export default HeaderCarouselLoader;
