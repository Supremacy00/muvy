import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import TruncatedText from "./TruncatedText";
import ProductionCompanies from "./ProductionCompanies";
import Cast from "./Cast";
import PopularMovies from "../home/popularMovies/PopularMovies";

const { height: screenHeight } = Dimensions.get("window");

const MovieDetailsContent = ({
  title,
  runtime,
  overview,
  voteAverage,
  voteCount,
  genres,
  production_companies,
  movie_id,
  loading,
}) => {

  const convertRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const hourString = hours <= 1 ? `${hours} hour` : `${hours} hours`;
    const minuteString =
      remainingMinutes <= 1
        ? `${remainingMinutes} minute`
        : `${remainingMinutes} minutes`;
    return `${hourString} ${minuteString}`;
  };

  const formatVoteCount = (count) => {
    if (count >= 1_000_000) {
      return `(${(count / 1_000_000).toFixed(1)} M Reviews)`;
    } else if (count >= 1_000) {
      return `(${(count / 1_000).toFixed(1)} K Reviews)`;
    } else {
      return `(${count} Reviews)`;
    }
  };


  const marginTop = screenHeight * 0.45;

  return (
    <View style={{ marginTop, alignItems: "center" }}>
      <Text
        className="text-white-100 text-2xl font-bold"
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <View className="flex flex-row justify-center items-center gap-x-1 mt-2.5">
        {runtime && (
          <Text className=" text-secondary-400 text-[15px] font-pmedium">
            {convertRuntime(runtime)}
          </Text>
        )}
        <View className="flex flex-row items-center gap-x-1.5">
          <Octicons name="star-fill" size={15} color="#fbbf24" />
          {voteAverage && (
            <Text className="text-[#acabab] text-[15px] font-pmedium">
              {parseFloat(voteAverage).toFixed(1)}
            </Text>
          )}
        </View>
        {voteCount && (
          <Text className="text-[#acabab] text-[15px] font-pmedium">
            {formatVoteCount(voteCount)}
          </Text>
        )}
      </View>
      {genres && (
        <FlatList
          data={genres}
          keyExtractor={(item) => item.id}
          renderItem={({ item: genre }) => (
            <View className="flex flex-row justify-center items-center gap-2.5 mt-1.5">
              <View className=" bg-secondary-300 py-2.5 px-5 rounded-full mb-2">
                <Text className=" text-secondary-400 text-[15px] text-center font-pmedium">
                  {genre.name}
                </Text>
              </View>
            </View>
          )}
          horizontal
          contentContainerStyle={styles.flatListContent}
          showsHorizontalScrollIndicator="false"
        />
      )}
      <View className="w-full px-4 mt-5">
        <View>
          <Text className="text-white-300 text-start text-lg font-psemibold">
            Story Line
          </Text>
          <TruncatedText overview={overview} />
        </View>
        <Cast movie_id={movie_id} />
        <ProductionCompanies production_companies={production_companies} />
        <PopularMovies
          endpoint="movie/top_rated"
          header="Similiar Movies"
          otherStyles="px-0 mt-5 "
          textStyle="text-white-300 text-lg font-psemibold"
          hideSeeAll={true}
        />
      </View>
    </View>
  );
};

export default MovieDetailsContent;

const styles = StyleSheet.create({
  flatListContent: {
    gap: 10,
    paddingHorizontal: 16,
  },
});
