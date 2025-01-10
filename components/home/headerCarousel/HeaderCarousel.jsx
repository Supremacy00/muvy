import { View, FlatList, Animated, Text,  RefreshControl, ScrollView, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import HeaderCarouselCard from "./HeaderCarouselCard";
import Pagination from "../../Pagination";
import useFetch from "../../../hooks/useFetch";
import HeaderCarouselLoader from "../../Loaders/HeaderCarouselLoader";

const {width} = Dimensions.get('window')

const HeaderCarousel = () => {
  const { data, loading, error, refreshing, onRefresh } =
    useFetch("movie/top_rated", {}, true);

  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const slicedData = Array.isArray(data) ? data.slice(0, 5) : [];

  return (
    <>
      <View className="relative flex-1 justify-center">
        {loading ? (
          <HeaderCarouselLoader />
        ) : (
          <>
            {slicedData && (
              <FlatList
                data={slicedData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item: movie }) => (
                  <HeaderCarouselCard
                    title={movie.title}
                    image={movie.backdrop_path}
                    genre={movie.release_date}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                pagingEnabled
                snapToAlignment="center"
                bounces={false}
              />
            )}

            <Pagination movies={slicedData} scrollX={scrollX} index={index} />
          </>
        )}
      </View>
    </>
  );
};

export default HeaderCarousel;
