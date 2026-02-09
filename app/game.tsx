import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";

import { useGame } from "../context/GameContext";
import WordDisplay from "../components/Game/WordDisplay";
import Keyboard from "../components/Game/Keyboard";
import HangmanDrawing from "../components/Game/HangmanDrawing";
import ResultModal from "../components/Game/ResultModal";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function GameScreen() {
  const { mode } = useLocalSearchParams<{ mode: "fun" | "spicy" | "chaos" }>();
  const router = useRouter();
  const game = useGame();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (mode) {
      game.startGame(mode);
    }
  }, [mode]);

  return (
    <View style={[
    styles.container,
    {
      paddingTop: insets.top + 12,
      paddingBottom: insets.bottom + 16,
    },
  ]}>
<Text style={styles.mode}>
        {game.mode === "fun"
          ? "😂 FUN MODE"
          : game.mode === "spicy"
          ? "🔥 SPICY MODE"
          : "😈 CHAOS MODE"}
      </Text>

      <HangmanDrawing wrongGuesses={game.wrongGuesses} />

      <WordDisplay
        word={game.word}
        guessedLetters={game.guessedLetters}
      />

      <Text style={styles.hint}>Hint: {game.hint}</Text>

      <Keyboard
        guessedLetters={game.guessedLetters}
        onGuess={game.guessLetter}
      />

      <ResultModal
        visible={game.isGameOver}
        win={game.isWin}
        word={game.word}
        dare={game.dare}
        onPlayAgain={game.playAgain}
        onHome={() => router.replace("/")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    alignItems: "center",
  },
  mode: {
    fontSize: 22,
    fontWeight: "900",
    color: "#fca5a5",
    marginBottom: 6,
  },
  hint: {
    marginBottom: 16,
    fontSize: 14,
    color: "#facc15",
  },
});