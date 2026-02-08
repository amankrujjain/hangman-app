import { Slot } from "expo-router";
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";

import { AppUIProvider, useAppUI } from "../context/AppUIContext";
import { GameProvider } from "../context/GameContext";
import AppLoader from "../components/loader/AppLoader";

function RootLayoutInner() {
  const { isAppLoading, setAppLoading } = useAppUI();

  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );

    const t = setTimeout(() => {
      setAppLoading(false);
    }, 1500);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Slot />
      {isAppLoading && <AppLoader />}
    </>
  );
}

export default function RootLayout() {
  return (
    <AppUIProvider>
      <GameProvider>
        <RootLayoutInner />
      </GameProvider>
    </AppUIProvider>
  );
}