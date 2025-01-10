import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";

const Cast = ({ movie_id }) => {
  const { data, loading, error, refreshing, onRefresh } = useFetch(
    `movie/${movie_id}/credits`,
    {},
    false
  );


  return (
    <View className="flex-1 justify-center mt-5">
       <Text className="text-white-300 text-start text-lg font-psemibold">
        Cast
      </Text>
      <FlatList
        data={data?.cast}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-3">
            <View className="w-16 h-16 overflow-hidden rounded-full">
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
                }}
                resizeMode="cover"
                className="w-full h-full"
              />
            </View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="flex-1 w-[75px] text-white-200 text-[15px] font-pmedium mt-0.5"
            >
              {item.name}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="flex-1 w-[75px] text-secondary-400 text-[12px] font-pmedium mt-0.5"
            >
              {item.character}
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

export default Cast;

const styles = StyleSheet.create({
  flatListContent: {
    gap: 10,
  },
});
