import Svg, { Line, Circle, Text as SvgText } from "react-native-svg";
import { View, StyleSheet } from "react-native";

type Props = {
  wrongGuesses: number;
};

export default function HangmanDrawing({ wrongGuesses }: Props) {
  return (
    <View style={styles.container}>
      <Svg width={200} height={200} viewBox="0 0 200 200">
        {/* Gallows */}
        <Line x1="20" y1="180" x2="100" y2="180" stroke="#4a5568" strokeWidth={4} />
        <Line x1="60" y1="180" x2="60" y2="20" stroke="#4a5568" strokeWidth={4} />
        <Line x1="60" y1="20" x2="140" y2="20" stroke="#4a5568" strokeWidth={4} />
        <Line x1="140" y1="20" x2="140" y2="40" stroke="#4a5568" strokeWidth={4} />

        {/* Body parts */}
        {wrongGuesses >= 1 && (
          <Circle
            cx="140"
            cy="55"
            r="15"
            stroke="#ff6b6b"
            strokeWidth={3}
            fill="none"
          />
        )}

        {wrongGuesses >= 2 && (
          <Line
            x1="140"
            y1="70"
            x2="140"
            y2="110"
            stroke="#ff6b6b"
            strokeWidth={3}
            strokeLinecap="round"
          />
        )}

        {wrongGuesses >= 3 && (
          <Line
            x1="140"
            y1="80"
            x2="120"
            y2="100"
            stroke="#ff6b6b"
            strokeWidth={3}
            strokeLinecap="round"
          />
        )}

        {wrongGuesses >= 4 && (
          <Line
            x1="140"
            y1="80"
            x2="160"
            y2="100"
            stroke="#ff6b6b"
            strokeWidth={3}
            strokeLinecap="round"
          />
        )}

        {wrongGuesses >= 5 && (
          <Line
            x1="140"
            y1="110"
            x2="120"
            y2="140"
            stroke="#ff6b6b"
            strokeWidth={3}
            strokeLinecap="round"
          />
        )}

        {wrongGuesses >= 6 && (
          <Line
            x1="140"
            y1="110"
            x2="160"
            y2="140"
            stroke="#ff6b6b"
            strokeWidth={3}
            strokeLinecap="round"
          />
        )}

        {/* Dead face */}
        {wrongGuesses >= 6 && (
          <SvgText
            x="140"
            y="60"
            fontSize="16"
            textAnchor="middle"
          >
            😵
          </SvgText>
        )}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    alignItems: "center",
  },
});