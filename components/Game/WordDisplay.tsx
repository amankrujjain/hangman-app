import { View, Text, StyleSheet } from "react-native";

type Props = {
  word: string;
  guessedLetters: string[];
};

export default function WordDisplay({ word, guessedLetters }: Props) {
  return (
    <View style={styles.container}>
      {word.split("").map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter);

        return (
          <View key={index} style={styles.letterBox}>
            <Text style={styles.letter}>
              {isGuessed ? letter : ""}
            </Text>
          </View>
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
    gap: 10,
    marginVertical: 20,
  },
  letterBox: {
    width: 42,
    height: 56,
    borderBottomWidth: 3,
    borderColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    fontSize: 32,
    fontWeight: "800",
    color: "#4ade80", // green like your win letters
  },
});