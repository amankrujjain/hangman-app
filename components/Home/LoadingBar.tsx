import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  onComplete?: () => void;
};

export default function LoadingBar({ onComplete }: Props) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 1600,
      useNativeDriver: false,
    }).start(() => {
      onComplete?.();
    });
  }, []);

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.track}>
        <Animated.View style={[styles.fill, { width }]}>
          <LinearGradient
            colors={["#8b5cf6", "#ec4899", "#ef4444"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      </View>
      <Text style={styles.text}>LOADING...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    maxWidth: 320,
    alignSelf: "center",
  },
  track: {
    height: 8,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.15)",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 8,
  },
  text: {
    marginTop: 10,
    fontSize: 11,
    letterSpacing: 2,
    color: "#9ca3af",
    textAlign: "center",
    fontWeight: "600",
  },
});