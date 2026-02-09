import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ROUTES } from "../constants/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
  
export default function ModeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const startGame = (mode: "fun" | "spicy") => {
    router.push({
      pathname: ROUTES.GAME as any,
      params: { mode },
    });
  };

  return (
    <View style={[
    styles.container,
    {
      paddingTop: insets.top + 16,
      paddingBottom: insets.bottom + 24,
    },
  ]}>
      {/* Title */}
      <View style={styles.header}>
        <Text style={styles.title}>HAGMAN</Text>
        <Text style={styles.subtitle}>
          Choose Your Destiny! 🎭
        </Text>
      </View>

      {/* Cards */}
      <View style={styles.cards}>
        {/* FUN MODE */}
        <Pressable
          onPress={() => startGame("fun")}
          style={({ pressed }) => [
            styles.card,
            pressed && { transform: [{ scale: 0.97 }] },
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
          onPress={() => startGame("spicy")}
          style={({ pressed }) => [
            styles.card,
            pressed && { transform: [{ scale: 0.97 }] },
          ]}
        >
          <LinearGradient
            colors={["#ef4444", "#f97316"]}
            style={styles.cardBg}
          >
            <Text style={styles.emoji}>🔥</Text>
            <Text style={[styles.cardTitle, { color: "#fee2e2" }]}>
              SPICY MODE
            </Text>
            <Text style={styles.cardText}>
              Bold & daring challenges await!
            </Text>
          </LinearGradient>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        Choose your fate wisely... 👀
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 48,
  },
  title: {
    fontSize: 64,
    fontWeight: "900",
    letterSpacing: 3,
    color: "#fca5a5",
  },
  subtitle: {
    marginTop: 2,
    fontSize: 18,
    color: "#d1d5db",
    fontWeight: "600",
  },
  cards: {
    gap: 10,
  },
  card: {
    borderRadius: 24,
    overflow: "hidden",
  },
  cardBg: {
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 24,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#e0e7ff",
    letterSpacing: 2,
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
    color: "#e5e7eb",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  footer: {
    marginTop: 24,
    textAlign: "center",
    color: "#9ca3af",
    fontSize: 14,
  },
});