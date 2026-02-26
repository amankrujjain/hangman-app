import { Text, StyleSheet } from "react-native";
import InfoScreenLayout from "../components/InfoScreenLayout";

export default function PrivacyScreen() {
  return (
    <InfoScreenLayout title="Privacy Policy">
      <Text style={styles.text}>
        Hangman Dare Game is a simple couple-friendly game combining
        classic Hangman with fun Truth & Dare twists.
      </Text>

      <Text style={styles.section}>1. No Personal Data Collection</Text>
      <Text style={styles.text}>
        We do NOT collect, store, or share any personal information.
        No login, no tracking, no analytics.
      </Text>

      <Text style={styles.section}>2. No Permissions Required</Text>
      <Text style={styles.text}>
        The app does not request access to your camera, microphone,
        contacts, location, or storage.
      </Text>

      <Text style={styles.section}>3. Safe & Private</Text>
      <Text style={styles.text}>
        Everything happens locally on your device.
        Your gameplay stays completely private.
      </Text>

      <Text style={styles.footer}>
        If you have questions, feel free to contact us.
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