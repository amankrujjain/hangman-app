import { useEffect } from "react";
import { BackHandler } from "react-native";

export const useAndroidBack = (handler?: () => boolean) => {
  useEffect(() => {
    if (!handler) return;

    const sub = BackHandler.addEventListener(
      "hardwareBackPress",
      handler
    );

    return () => sub.remove();
  }, [handler]);
};