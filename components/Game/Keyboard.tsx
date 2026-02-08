import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  guessedLetters: string[];
  onGuess: (letter: string) => void;
};

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ guessedLetters, onGuess }: Props) {
  return (
    <View style={styles.container}>
      {LETTERS.map((letter) => {
        const disabled = guessedLetters.includes(letter);

        return (
          <Pressable
            key={letter}
            disabled={disabled}
            onPress={() => onGuess(letter)}
            style={({ pressed }) => [
              styles.key,
              disabled && styles.disabled,
              pressed && !disabled && { transform: [{ scale: 0.95 }] },
            ]}
          >
            <Text style={styles.keyText}>{letter}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    maxWidth: 340,
  },
  key: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },
  keyText: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  disabled: {
    opacity: 0.35,
  },
});