import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import Images from "../constants/Images";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

const { width, height } = Dimensions.get("window");

const RootPage = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={Images.onboardingbg}
        resizeMode="cover"
        className="flex-1 justify-end"
      >
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          locations={[0.45, 0.7]}
          colors={["#030712", "transparent"]}
          style={{ ...StyleSheet.absoluteFillObject }}
        />
        <SafeAreaView>
          <View className="px-5 flex-col justify-center mb-7">
            <Text className=" text-white-100 text-center text-3xl font-psemibold mb-5">Muvy</Text>
            <Text className="text-white-200 text-lg font-pmedium text-center w-[320px] mx-auto">Get ready to dive into the greatest stories in TV and Film</Text>
            <View className="mt-3">
             <CustomButton title="Subscribe Now" otherStyles="mt-5"/>
             <CustomButton title="Sign In" otherStyles="mt-2.5 bg-secondary-300"/>
            </View>
            <View className="flex flex-row justify-center items-center gap-1 mt-5">
            <Text className="text-white-200 text-base font-pmedium">Dont have an account?</Text>
            <Link href="/home" asChild>
            <Text className="text-[#4d7c0f] text-base font-psemibold">Sign Up</Text>
            </Link>
            </View>
            <Text className="text-white-200 text-sm text-center font-pmedium leading-[23px] w-[310px] mx-auto my-5">By creating an account or signing in, you agree to our Terms of Service and Privacy Policy.</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default RootPage;
