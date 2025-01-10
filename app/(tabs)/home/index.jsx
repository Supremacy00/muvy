import { View, Text, ScrollView, RefreshControl } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../../../components/home/HomeHeader";
import HeaderCarousel from "../../../components/home/headerCarousel/HeaderCarousel";
import Menus from "../../../components/home/Menus";
import useFetch from "../../../hooks/useFetch";
import ForYou from "../../../components/home/popularMovies/PopularMovies";
import UpcomingMovies from "../../../components/home/upcomingMovies/UpcomingMovies";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import PopularMovies from "../../../components/home/popularMovies/PopularMovies";

const Home = () => {
  const { refreshing, onRefresh } = useFetch("movie/top_rated");

  return (
    <SafeAreaView
      className="flex-1 bg-primary-color"
      edges={["top", "left", "right"]}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View className=" mb-24">
          <HomeHeader />
          <HeaderCarousel />
          <PopularMovies endpoint="movie/popular" header="Popular Movies"  hideSeeAll={false} />
          <UpcomingMovies />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Home;
