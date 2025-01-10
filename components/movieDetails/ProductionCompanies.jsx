import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

const ProductionCompanies = ({ production_companies }) => {
  return (
    <View className="flex-1 justify-center mt-5">
      <Text className="text-white-300 text-start text-lg font-psemibold">
        {production_companies?.length <= 1 ? "Production Company" : "Production Companies" }
      </Text>
      <FlatList
        data={production_companies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-3">
            <View className="w-16 h-14 overflow-hidden bg-white-300 rounded-xl p-1">
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.logo_path}`,
                }}
                resizeMode="contain"
                className="w-full h-full"
              />
            </View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="flex-1 w-[75px] text-white-200 text-sm font-pmedium mt-0.5"
            >
              {item.name}
            </Text>
          </View>
        )}
        horizontal
        contentContainerStyle={styles.flatListContent}
        showsHorizontalScrollIndicator="false"
      />
    </View>
  );
};

export default ProductionCompanies;

const styles = StyleSheet.create({
  flatListContent: {
    gap: 10,
  },
});
