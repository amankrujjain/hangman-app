import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import * as Haptics from "expo-haptics";
import { Audio } from "expo-av";

type UIControlsContextType = {
  musicOn: boolean;
  toggleMusic: () => void;

  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;

  click: () => void;
};

const UIControlsContext =
  createContext<UIControlsContextType | null>(null);

export const UIControlsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [musicOn, setMusicOn] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [bgSound, setBgSound] =
    useState<Audio.Sound | null>(null);
  const [clickSound, setClickSound] =
    useState<Audio.Sound | null>(null);

  /* ---------------------------
     INIT AUDIO (ON APP START)
  ---------------------------- */
  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
          await Audio.setAudioModeAsync({
              allowsRecordingIOS: false,
              staysActiveInBackground: false,
              playsInSilentModeIOS: true,
              shouldDuckAndroid: true,
          });
        const { sound: bg } =
          await Audio.Sound.createAsync(
            require("../assets/audio/bg.mp3"),
            {
              isLooping: true,
              volume: 0.4,
              shouldPlay: true,
            }
          );

        // Click sound
        const { sound: click } =
          await Audio.Sound.createAsync(
            require("../assets/audio/click.mp3"),
            { volume: 0.9 }
          );

        if (!mounted) return;

        setBgSound(bg);
        setClickSound(click);
      } catch (e) {
        console.warn("Audio init failed", e);
      }
    })();

    return () => {
      mounted = false;
      bgSound?.unloadAsync();
      clickSound?.unloadAsync();
    };
  }, []);

  /* ---------------------------
     HAPTIC + CLICK SOUND
  ---------------------------- */
  const click = async () => {
    await Haptics.selectionAsync();
    try {
      await clickSound?.replayAsync();
    } catch {}
  };

  /* ---------------------------
     MUSIC TOGGLE
  ---------------------------- */
  const toggleMusic = async () => {
    click();

    setMusicOn((prev) => {
      if (bgSound) {
        prev
          ? bgSound.pauseAsync()
          : bgSound.playAsync();
      }
      return !prev;
    });
  };

  /* ---------------------------
     DRAWER CONTROL
  ---------------------------- */
  const openDrawer = () => {
    click();
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    click();
    setDrawerOpen(false);
  };

  return (
    <UIControlsContext.Provider
      value={{
        musicOn,
        toggleMusic,
        drawerOpen,
        openDrawer,
        closeDrawer,
        click,
      }}
    >
      {children}
    </UIControlsContext.Provider>
  );
};

export const useUIControls = () => {
  const ctx = useContext(UIControlsContext);
  if (!ctx) {
    throw new Error(
      "useUIControls must be used inside UIControlsProvider"
    );
  }
  return ctx;
};