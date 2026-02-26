import { Text, StyleSheet } from "react-native";
import InfoScreenLayout from "../components/InfoScreenLayout";

export default function HowToPlayScreen() {
  return (
    <InfoScreenLayout title="How To Play">
      <Text style={styles.text}>
        Think you’re smart enough? Or brave enough? 😈
      </Text>

      <Text style={styles.section}>🎯 Step 1: Guess the Word</Text>
      <Text style={styles.text}>
        Just like classic Hangman — pick letters and try to reveal the hidden word.
      </Text>

      <Text style={styles.section}>❌ Wrong Guess?</Text>
      <Text style={styles.text}>
        Uh oh... Every wrong answer pushes you closer to a DARE.
        Miss too many letters? Face the challenge!
      </Text>

      <Text style={styles.section}>✅ Correct Guess?</Text>
      <Text style={styles.text}>
        You’re safe! 🎉 Crack the word before running out of chances
        and move to the next round like a legend.
      </Text>

      <Text style={styles.section}>🔥 The Twist</Text>
      <Text style={styles.text}>
        Lose the round… and the game chooses a dare for you.
        Win the round… and you escape.
      </Text>

      <Text style={styles.footer}>
        Ready to test your brain AND your courage?
      </Text>
    </InfoScreenLayout>
  );
}

const styles = StyleSheet.create({
  section: {
    fontSize: 16,
    fontWeight: "800",
    color: "#ec4899",
    marginTop: 20,
    marginBottom: 6,
  },
  text: {
    color: "#d1d5db",
    fontSize: 14,
    lineHeight: 22,
  },
  footer: {
    marginTop: 30,
    fontSize: 12,
    color: "#9ca3af",
  },
});