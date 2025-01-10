import { View, Text, FlatList, StyleSheet, TouchableOpacity,} from "react-native";
import React from "react";
import CustomMovieHeader from "../../CustomMovieHeader";
import { router } from "expo-router";
import UpcomingMovieCards from "./UpcomingMovieCards";
import useFetch from "../../../hooks/useFetch";
import ForYouLoader from "../../Loaders/ForYouLoader";

const UpcomingMovies = () => {
  const { data, loading, error, onRefresh } = useFetch("movie/upcoming");

  const handlePress = () => {
    router.push("/all-upcoming-movies");
  };
  const renderMovie = ({ item: movies }) => (
    <TouchableOpacity
      onPress={() => router.navigate(`/movie-details/${movies.id}`)}
    >
      <UpcomingMovieCards title={movies.title} image={movies?.backdrop_path} voteAverage={movies?.vote_average} release_date={movies.release_date} />
    </TouchableOpacity>
  );

  

  return (
    <View className={`flex-1 px-4 mt-6`}>
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
              <CustomMovieHeader onPress={handlePress} header="Upcoming Movies" />
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

export default UpcomingMovies;

const styles = StyleSheet.create({
  flatListContent: {
    gap: 14,
  },
  flatListContentSkeleton: {
    gap: 16,
  },
});
