import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FeaturedBanners from "../components/Home/FeaturedBanners";
import { useUIControls } from "../context/UIControlContext";

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
   const { click } = useUIControls(); 
  const start = () => {
    router.push("/mode");
  };

  return (
    <View style={styles.container}>
      {/* Top */}
      <View style={styles.top}>
        <Text style={styles.title}>HANGMAN</Text>
        <Text style={styles.tagline}>
          Guess Wrong, Face the Dare! 🎭
        </Text>

        <FeaturedBanners />
      </View>

      {/* Bottom CTA */}
      <View style={[styles.bottom, { paddingBottom: insets.bottom + 8 }]}>
        <Pressable
          onPress={() => {
            click();
            start();
          }}
          style={({ pressed }) => [
            styles.button,
            pressed && { transform: [{ scale: 0.96 }] },
          ]}
        >
          <LinearGradient
            colors={["#7c3aed", "#ec4899"]}
            style={styles.buttonBg}
          >
            <Text style={styles.buttonText}>
              START PLAYING
            </Text>
          </LinearGradient>
        </Pressable>

        <Text style={styles.footer}>
          🎪 Are you ready to face the dares?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 24,
  },
  top: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 58,
    fontWeight: "900",
    letterSpacing: 3,
    color: "#fca5a5",
  },
  tagline: {
    marginTop: 6,
    fontSize: 15,
    color: "#d1d5db",
    fontWeight: "600",
  },
  bottom: {
    paddingTop: 8,
    paddingBottom: 24,
    alignItems: "center",
  },
  button: {
    width: "100%",
    maxWidth: 280,
    borderRadius: 20,
    overflow: "hidden",
  },
  buttonBg: {
    paddingVertical: 16,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 2,
    color: "white",
  },
  footer: {
    marginTop: 14,
    fontSize: 12,
    color: "#9ca3af",
  },
});
