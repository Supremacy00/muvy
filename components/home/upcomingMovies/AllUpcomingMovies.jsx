import { View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import AllUpcomingMoviesCard from "./AllUpcomingMoviesCard";
import useFetch from "../../../hooks/useFetch"
import UpcomingMoviesLoader from "../../Loaders/UpcomingMoviesLoader";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AllUpcomingMovies = () => {
  const { data, loading, error, refreshing, onRefresh } =
    useFetch("movie/upcoming");

  return (
    <View className="px-4">
      <SafeAreaView edges={["top", "bottom", "left", "right"]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
      {loading ? (
        Array(10)
          .fill()
          .map((_, index) => <UpcomingMoviesLoader key={index} />)
      ) : (
        <>
          {data && (
            <>
              {data?.map((movies) => (
                <TouchableOpacity
                  key={movies.id}
                  onPress={() => router.navigate(`/movie-details/${movies.id}`)}
                >
                  <AllUpcomingMoviesCard
                    title={movies.title}
                    image={movies.backdrop_path}
                    genre={movies.genre}
                    duration={movies.duration}
                    rating={parseFloat(movies.vote_average).toFixed(1)}
                    numberOfRatings={("0" + movies.vote_count).slice(-2)}
                  />
                </TouchableOpacity>
              ))}
            </>
          )}
        </>
      )}
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AllUpcomingMovies;
