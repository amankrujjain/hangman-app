import { Slot } from "expo-router";
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import { UIControlsProvider } from "../context/UIControlContext";
import TopBar from "../components/TopBar/TopBar";
import { AppUIProvider, useAppUI } from "../context/AppUIContext";
import { GameProvider } from "../context/GameContext";
import AppLoader from "../components/loader/AppLoader";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
      {!isAppLoading && <TopBar />}
      <Slot />
      {isAppLoading && <AppLoader />}
    </>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppUIProvider>
        <UIControlsProvider>
          <GameProvider>
            <RootLayoutInner />
          </GameProvider>
        </UIControlsProvider>
      </AppUIProvider>
    </SafeAreaProvider>
  );
}