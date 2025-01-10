import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import useFetch from "../../../hooks/useFetch";
import CustomMovieHeader from "../../CustomMovieHeader";
import PopularMoviesCard from "./PopularMoviesCard";
import { isLoading } from "expo-font";
import ForYouLoader from "../../Loaders/ForYouLoader";
import { router } from "expo-router";

const PopularMovies = ({ endpoint, header, otherStyles, textStyle, hideSeeAll}) => {
  const { data, loading, error, onRefresh } = useFetch(endpoint);

  const renderMovie = ({ item: movies }) => (
    <TouchableOpacity
      onPress={() => router.navigate(`/movie-details/${movies.id}`)}
    >
      <PopularMoviesCard title={movies.title} image={movies.backdrop_path} />
    </TouchableOpacity>
  );

  return (
    <View className={`flex-1 px-4 mt-6 ${otherStyles}`}>
      {loading ? (
        <FlatList
          data={Array.from({ length: 10 })}
          keyExtractor={(item, index) => index.toString()}
          renderItem={() => <ForYouLoader />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContentSkeleton}
        />
      ) : (
        <>
          {data && (
            <>
              <CustomMovieHeader header={header} textStyle={textStyle} hideSeeAll={hideSeeAll} />
              <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderMovie}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
              />
            </>
          )}
        </>
      )}
    </View>
  );
};

export default PopularMovies;

const styles = StyleSheet.create({
  flatListContent: {
    gap: 14,
  },
  flatListContentSkeleton: {
    gap: 16,
  },
});
