import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Confetti from "./Confetti";

type Props = {
  visible: boolean;
  win: boolean;
  word: string;
  dare?: string;
  onPlayAgain: () => void;
  onHome: () => void;
};

export default function ResultModal({
  visible,
  win,
  word,
  dare,
  onPlayAgain,
  onHome,
}: Props) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        {/* 🎉 CONFETTI ONLY ON WIN */}
        {win && <Confetti />}

        <View style={styles.card}>
          <Text style={styles.emoji}>{win ? "🎉" : "😈"}</Text>

          <Text style={[styles.title, win ? styles.win : styles.lose]}>
            {win ? "YOU WON!" : "YOU LOST!"}
          </Text>

          <Text style={styles.word}>
            The word was: {word}
          </Text>

          {!win && dare && (
            <View style={styles.dareBox}>
              <Text style={styles.dareLabel}>Your Dare:</Text>
              <Text style={styles.dare}>{dare}</Text>
            </View>
          )}

          <View style={styles.actions}>
            <Pressable onPress={onPlayAgain} style={styles.btn}>
              <LinearGradient
                colors={["#6366f1", "#8b5cf6"]}
                style={styles.btnBg}
              >
                <Text style={styles.btnText}>Play Again 🎮</Text>
              </LinearGradient>
            </Pressable>

            <Pressable onPress={onHome} style={styles.btn}>
              <View style={[styles.btnBg, styles.homeBtn]}>
                <Text style={styles.btnText}>Home 🏠</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.97)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 28,
    padding: 24,
    alignItems: "center",
  },
  emoji: {
    fontSize: 72,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 8,
  },
  win: {
    color: "#4ade80",
  },
  lose: {
    color: "#f87171",
  },
  word: {
    color: "#d1d5db",
    marginBottom: 16,
    textAlign: "center",
  },
  dareBox: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  dareLabel: {
    fontSize: 12,
    color: "#9ca3af",
    marginBottom: 6,
    textAlign: "center",
  },
  dare: {
    fontSize: 16,
    fontWeight: "700",
    color: "#facc15",
    textAlign: "center",
  },
  actions: {
    width: "100%",
    gap: 12,
  },
  btn: {
    borderRadius: 16,
    overflow: "hidden",
  },
  btnBg: {
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 16,
  },
  homeBtn: {
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  btnText: {
    color: "white",
    fontWeight: "800",
    fontSize: 14,
  },
});