import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function FeaturedBanners() {
  return (
    <View style={styles.wrapper}>
      {/* Main Featured Banner */}
      <View style={styles.mainCard}>
        <LinearGradient
          colors={["#ff416c", "#ff4b2b"]}
          style={styles.mainGradient}
        >
          <Text style={styles.fire}>🔥</Text>

          <View>
            <Text style={styles.newBadge}>NEW</Text>
            <Text style={styles.mainTitle}>SPICY MODE</Text>
            <Text style={styles.mainDesc}>
              Bold challenges & daring dares await!
            </Text>
          </View>
        </LinearGradient>
      </View>

      {/* Secondary banners */}
      <View style={styles.row}>
        <LinearGradient
          colors={["#667eea", "#764ba2"]}
          style={styles.smallCard}
        >
          <Text style={styles.emoji}>😂</Text>
          <Text style={styles.smallTitle}>Fun Mode</Text>
          <Text style={styles.smallDesc}>Hilarious laughs</Text>
        </LinearGradient>

        <View style={[styles.smallCard, styles.glass]}>
          <Text style={styles.emoji}>🎮</Text>
          <Text style={styles.smallTitle}>Endless Fun</Text>
          <Text style={styles.smallDesc}>100+ Words & Dares</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    maxWidth: 360,
    alignSelf: "center",
    gap: 14,
    marginTop: 24,
  },

  mainCard: {
    borderRadius: 24,
    overflow: "hidden",
  },
  mainGradient: {
    padding: 20,
    borderRadius: 24,
    position: "relative",
  },
  fire: {
    position: "absolute",
    right: 16,
    top: 8,
    fontSize: 56,
    opacity: 0.25,
  },
  newBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 10,
    fontWeight: "800",
    color: "#fecaca",
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "white",
    letterSpacing: 1,
  },
  mainDesc: {
    marginTop: 4,
    fontSize: 13,
    color: "#fee2e2",
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },
  smallCard: {
    flex: 1,
    borderRadius: 18,
    padding: 14,
  },
  glass: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  emoji: {
    fontSize: 32,
    marginBottom: 6,
    opacity: 0.6,
  },
  smallTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "white",
  },
  smallDesc: {
    fontSize: 12,
    color: "#e5e7eb",
    marginTop: 2,
  },
});