import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ROUTES } from "../constants/routes";
import { useUIControls } from "../context/UIControlContext";
import { GameMode } from "../constants/gameModes";

export default function ModeScreen() {
  const router = useRouter();
  const { click } = useUIControls();

const startGame = (mode: GameMode) => {
  router.push({
    pathname: ROUTES.GAME as any,
    params: { mode },
  });
};

  return (
    <SafeAreaView style={styles.safe} edges={["bottom"]}>
      {/* 
        Top safe area is already handled by TopBar.
        We only protect the bottom edge here.
      */}

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>HAGMAN</Text>
          <Text style={styles.subtitle}>
            Choose Your Destiny! 🎭
          </Text>
        </View>

        {/* Mode Cards */}
        <View style={styles.cards}>
          {/* FUN MODE */}
          <Pressable
            onPress={() => {
              click();
              startGame("fun");
            }}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.pressed,
            ]}
          >
            <LinearGradient
              colors={["#6366f1", "#8b5cf6"]}
              style={styles.cardBg}
            >
              <Text style={styles.emoji}>😂</Text>
              <Text style={styles.cardTitle}>FUN MODE</Text>
              <Text style={styles.cardText}>
                Silly & hilarious dares for laughs!
              </Text>
            </LinearGradient>
          </Pressable>

          {/* SPICY MODE */}
          <Pressable
            onPress={() => {
              click();
              startGame("spicy");
            }}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.pressed,
            ]}
          >
            <LinearGradient
              colors={["#ef4444", "#f97316"]}
              style={styles.cardBg}
            >
              <Text style={styles.emoji}>🔥</Text>
              <Text style={styles.cardTitle}>SPICY MODE</Text>
              <Text style={styles.cardText}>
                Bold & daring challenges await!
              </Text>
            </LinearGradient>
          </Pressable>

        </View>

        <Text style={styles.footer}>
          Choose your fate wisely... 👀
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24, // visual spacing only (NOT safe area)
    paddingBottom: 32,
  },
  header: {
    alignItems: "center",
    marginBottom: 36,
  },
  title: {
    fontSize: 64,
    fontWeight: "900",
    letterSpacing: 3,
    color: "#fca5a5",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 18,
    color: "#d1d5db",
    fontWeight: "600",
  },
  cards: {
    gap: 14,
  },
  card: {
    borderRadius: 24,
    overflow: "hidden",
  },
  pressed: {
    transform: [{ scale: 0.97 }],
  },
  cardBg: {
    paddingVertical: 22,
    alignItems: "center",
    borderRadius: 24,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: "#e0e7ff",
    letterSpacing: 2,
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
    color: "#e5e7eb",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  footer: {
    marginTop: 28,
    textAlign: "center",
    color: "#9ca3af",
    fontSize: 14,
  },
});