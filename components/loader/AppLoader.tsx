import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function AppLoader() {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(progress, {
        toValue: 100,
        duration: 1400,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.overlay} pointerEvents="auto">
      <Text style={styles.title}>HAGMAN</Text>

      <View style={styles.track}>
        <Animated.View style={[styles.fill, { width }]}>
          <LinearGradient
            colors={["#8b5cf6", "#ec4899", "#ef4444"]}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      </View>

      <Text style={styles.text}>LOADING...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",   // 🔴 REQUIRED
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#1a1a2e",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,            // 🔴 REQUIRED
    elevation: 9999,        // 🔴 ANDROID
  },
  title: {
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: 4,
    color: "#fca5a5",
    marginBottom: 30,
  },
  track: {
    width: 240,
    height: 8,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.15)",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
  },
  text: {
    marginTop: 12,
    fontSize: 11,
    letterSpacing: 2,
    color: "#9ca3af",
    fontWeight: "700",
  },
});