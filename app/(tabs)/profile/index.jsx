import { View, Text, ScrollView } from "react-native";
import React from "react";
import Profile from "../../../components/profile/Profile"
import { SafeAreaView } from "react-native-safe-area-context";

const ProfilePage = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
    <Profile />
    </SafeAreaView>
  );
};

export default ProfilePage;
