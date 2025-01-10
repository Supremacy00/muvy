import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Dimensions,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams, Stack } from "expo-router";
import useFetch from "../../hooks/useFetch";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import MovieDetailsBackground from "../../components/movieDetails/MovieDetailsBackground";
import ShowButtonRight from "../../components/ShowButtonRight";
import ShowButtonLeft from "../../components/ShowButtonLeft";
import MovieDetailsContent from "../../components/movieDetails/MovieDetailsContent";

const { height: screenHeight } = Dimensions.get("window");

const MovieDetails = () => {
  const params = useLocalSearchParams();
  const movie_id = params.id;
  const { data, loading, error, refreshing, onRefresh } = useFetch(
    `movie/${movie_id}`,
    {},
    false
  );

  return (
    <View className="bg-primary-color h-full">
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTransparent: true,
          headerStyle: {
            top: 20,
          },
          headerLeft: () => (
            <ShowButtonLeft iconName="left" iconSize="22" iconColor="#FBFCF8" />
          ),
          headerRight: () => (
            <ShowButtonRight
              iconName="filter-list"
              iconSize="22"
              iconColor="#FBFCF8"
            />
          ),
        }}
      />

      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#2d2d32" />
        </View>
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator="false"
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            contentContainerStyle={{ paddingBottom: screenHeight * 0.02 }}
          >
            <MovieDetailsBackground poster={data?.poster_path} />
            <MovieDetailsContent
              title={data?.title}
              runtime={data?.runtime}
              overview={data?.overview}
              voteAverage={data?.vote_average}
              voteCount={data?.vote_count}
              genres={data?.genres}
              poster={data?.poster_path}
              loading={loading}
              refreshing={refreshing}
              onRefresh={onRefresh}
              production_companies={data?.production_companies}
              movie_id={movie_id}
            />
          </ScrollView>
          <SafeAreaView
            className="bg-primary-color"
            edges={["bottom", "left", "right"]}
          >
            <View className="flex flex-row justify-center items-center mt-2.5">
              <TouchableOpacity className="bg-secondary-300 p-4 rounded-full mr-4">
                <Feather name="download" size={22} color="#FBFCF8" />
              </TouchableOpacity>
              <CustomButton
                title="Watch Now"
                otherStyles="w-[200px] bg-[#4d7c0f] py-4"
              />
            </View>
          </SafeAreaView>
        </>
      )}
    </View>
  );
};

export default MovieDetails;
