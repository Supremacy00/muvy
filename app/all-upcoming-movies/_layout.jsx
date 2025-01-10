import React from "react";
import { Stack } from "expo-router";
import ShowButtonLeft from "../../components/ShowButtonLeft";

const AllUpcomingMoviesLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Upcoming",
          headerTintColor: "#FFFFFF",
          headerTitle: "Upcoming",
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: "prominent",
          headerLargeStyle: {
            backgroundColor: "#030712",
            weight: "bold",
          },
          headerLeft: () => (
            <ShowButtonLeft iconName="arrow-back-ios" type="MI" iconSize="22" iconColor="#FBFCF8" otherStyles="rounded-none bg-transparent p-0" />
          ),
        }}
      />
    </Stack>
  );
};

export default AllUpcomingMoviesLayout;
