import React, {
  View,
  Text,
  SafeAreaView,
  Animated,
  Easing,
} from "react-native";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import LocationTest from "@/components/Location";

export default function Planning() {
  //   const animationProgress = useRef(new Animated.Value(0));
  //   useEffect(() => {
  //     Animated.timing(animationProgress.current, {
  //       toValue: 1,
  //       duration: 10,
  //       easing: Easing.linear,
  //       useNativeDriver: false,
  //     }).start();
  //   }, []);

  return (
    // <SafeAreaView>
    <LocationTest></LocationTest>
    // </SafeAreaView>
  );
}
