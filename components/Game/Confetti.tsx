import { View, StyleSheet, Animated, Dimensions } from "react-native";
import { useEffect, useRef } from "react";

const { width, height } = Dimensions.get("window");
const COLORS = [
  "#ff6b6b",
  "#feca57",
  "#48dbfb",
  "#ff9ff3",
  "#54a0ff",
  "#5f27cd",
];

type Props = {
  count?: number;
};

export default function Confetti({ count = 30 }: Props) {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {Array.from({ length: count }).map((_, i) => (
        <ConfettiPiece key={i} />
      ))}
    </View>
  );
}

function ConfettiPiece() {
  const translateY = useRef(new Animated.Value(-20)).current;
  const translateX = Math.random() * width;
  const size = 6 + Math.random() * 6;
  const rotate = `${Math.random() * 360}deg`;
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const duration = 2500 + Math.random() * 2000;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: height + 20,
      duration,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.piece,
        {
          left: translateX,
          width: size,
          height: size,
          backgroundColor: color,
          transform: [{ translateY }, { rotate }],
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  piece: {
    position: "absolute",
    top: 0,
    borderRadius: 2,
  },
});