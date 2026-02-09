import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import * as Haptics from "expo-haptics";
import { Audio } from "expo-av";

type UIControlsContextType = {
  /* Audio */
  musicOn: boolean;
  soundOn: boolean;
  toggleMusic: () => void;
  toggleSound: () => void;

  /* Drawer */
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;

  /* UI click */
  click: () => void;
};

const UIControlsContext =
  createContext<UIControlsContextType | null>(null);

export const UIControlsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  /* ---------------------------
     STATE
  ---------------------------- */
  const [musicOn, setMusicOn] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [bgSound, setBgSound] =
    useState<Audio.Sound | null>(null);
  const [clickSound, setClickSound] =
    useState<Audio.Sound | null>(null);

  /* ---------------------------
     INIT AUDIO (ONCE)
  ---------------------------- */
  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: false,
          playThroughEarpieceAndroid: false,
        });

        // Background music
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
            { volume: 1.0 }
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
     CLICK (HAPTIC + SOUND)
  ---------------------------- */
  const click = async () => {
    try {
      if (!soundOn) return;

      await Haptics.selectionAsync();

      if (!clickSound) return;
      await clickSound.setPositionAsync(0); // 🔑 CRITICAL
      await clickSound.playAsync();
    } catch {}
  };

  /* ---------------------------
     MUSIC TOGGLE (BG)
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
     SOUND TOGGLE (CLICK)
  ---------------------------- */
  const toggleSound = () => {
    click();
    setSoundOn((prev) => !prev);
  };

  /* ---------------------------
     DRAWER
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
        soundOn,
        toggleMusic,
        toggleSound,
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