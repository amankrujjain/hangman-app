import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useUIControls } from "../context/UIControlContext";

export default function PremiumScreen() {
  const router = useRouter();
  const { click } = useUIControls();

  return (
    <SafeAreaView style={styles.safe} edges={["bottom"]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>GO PREMIUM</Text>
          <Text style={styles.subtitle}>
            Unlock the full HAGMAN experience 🎭
          </Text>
        </View>

        {/* Benefits */}
        <View style={styles.benefits}>
          <Text style={styles.benefit}>🔥 Unlock Spicy Mode</Text>
          <Text style={styles.benefit}>😈 Unlock Chaos Mode</Text>
          <Text style={styles.benefit}>🚫 Zero Ads</Text>
          <Text style={styles.benefit}>⚡ Future Exclusive Content</Text>
        </View>

        {/* CTA */}
        <Pressable
          onPress={() => {
            click();
            // 🚧 Billing will be added here later
          }}
          style={({ pressed }) => [
            styles.button,
            pressed && { transform: [{ scale: 0.97 }] },
          ]}
        >
          <LinearGradient
            colors={["#7c3aed", "#ec4899"]}
            style={styles.buttonBg}
          >
            <Text style={styles.buttonText}>
              UNLOCK PREMIUM
            </Text>
          </LinearGradient>
        </Pressable>

        {/* Footer */}
        <Pressable
          onPress={() => {
            click();
            router.back();
          }}
          style={styles.later}
        >
          <Text style={styles.laterText}>
            Maybe later
          </Text>
        </Pressable>
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
    paddingTop: 32,
    paddingBottom: 40,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 36,
  },
  title: {
    fontSize: 48,
    fontWeight: "900",
    letterSpacing: 3,
    color: "#fca5a5",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 16,
    color: "#d1d5db",
    textAlign: "center",
    fontWeight: "600",
  },
  benefits: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 32,
  },
  benefit: {
    fontSize: 16,
    color: "#fde68a",
    marginVertical: 6,
    textAlign: "center",
    fontWeight: "700",
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
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 2,
    color: "white",
  },
  later: {
    marginTop: 24,
  },
  laterText: {
    color: "#9ca3af",
    fontSize: 14,
  },
});