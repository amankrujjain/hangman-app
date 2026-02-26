import { Text, StyleSheet } from "react-native";
import InfoScreenLayout from "../components/InfoScreenLayout";

export default function TermsScreen() {
  return (
    <InfoScreenLayout title="Terms of Use">
      <Text style={styles.text}>
        By using Hangman Dare Game, you agree to the following terms:
      </Text>

      <Text style={styles.section}>1. Entertainment Purpose</Text>
      <Text style={styles.text}>
        This game is designed for entertainment only.
        Dares are meant to be fun and optional.
      </Text>

      <Text style={styles.section}>2. User Responsibility</Text>
      <Text style={styles.text}>
        Players are responsible for their own actions.
        Do not perform any dare that is unsafe,
        illegal, or makes anyone uncomfortable.
      </Text>

      <Text style={styles.section}>3. No Liability</Text>
      <Text style={styles.text}>
        The developers are not responsible for
        actions taken during gameplay.
      </Text>

      <Text style={styles.section}>4. Content Suitability</Text>
      <Text style={styles.text}>
        This game is couple-friendly and intended
        for mature audiences who understand playful dares.
      </Text>

      <Text style={styles.footer}>
        If you do not agree with these terms,
        please discontinue use of the app.
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