import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const fonts = {
  "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
  "Poppins-BlackItalic": require("../assets/fonts/Poppins-BlackItalic.ttf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  "Poppins-BoldItalic": require("../assets/fonts/Poppins-BoldItalic.ttf"),
  "Poppins-ExtraBoldItalic": require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
  "Poppins-LightItalic": require("../assets/fonts/Poppins-LightItalic.ttf"),
  "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
  "Poppins-ExtraLightItalic": require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
  "Poppins-Italic": require("../assets/fonts/Poppins-Italic.ttf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-MediumItalic": require("../assets/fonts/Poppins-MediumItalic.ttf"),
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  "Poppins-SemiBoldItalic": require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
  "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  "Poppins-ThinItalic": require("../assets/fonts/Poppins-ThinItalic.ttf"),
};

export default function RootLayout() {
  const [loaded] = useFonts(fonts);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
       <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="all-upcoming-movies"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
