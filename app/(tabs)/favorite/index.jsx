import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoriteScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
    <ScrollView>
        <Text className="text-white-200 text-4xl">Favourite</Text>
    </ScrollView>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
