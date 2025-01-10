import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
import MovieDetailsContent from "./MovieDetailsContent";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const MovieDetailsBackground = ({ poster }) => {
  return (
    <ImageBackground
      source={{
        uri: `https://image.tmdb.org/t/p/w500${poster}`,
      }}
      resizeMode="cover"
      style={styles.backgroundwidth}
    >
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        locations={[0.45, 0.65]}
        colors={["#030712", "transparent"]}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
    </ImageBackground>
  );
};

export default MovieDetailsBackground;

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
  },
  backgroundwidth: {
    position: "absolute",
    width: "100%",
    height: height * 0.87,
  },
});
