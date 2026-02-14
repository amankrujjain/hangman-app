import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { useUIControls } from "../../context/UIControlContext";
import { GameMode } from "../../constants/gameModes";

type Props = {
  visible: boolean;
  mode: GameMode | null;
  onClose: () => void;
};

export default function PremiumModal({
  visible,
  mode,
  onClose,
}: Props) {
  const { click } = useUIControls();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>🔒 Go Premium</Text>

          <Text style={styles.desc}>
            {mode === "spicy"
              ? "🔥 Unlock bold & flirty dares."
              : "😈 Unlock chaos-level madness."}
          </Text>

          {/* ✅ PREMIUM BENEFITS */}
          <View style={styles.points}>
            <Text style={styles.point}>✨ All Game Modes</Text>
            <Text style={styles.point}>🚫 Zero Ads</Text>
            <Text style={styles.point}>⚡ Future Exclusive Content</Text>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => {
              click();
              // 🚧 Billing will be wired here later
              onClose();
            }}
          >
            <Text style={styles.buttonText}>
              UNLOCK PREMIUM
            </Text>
          </Pressable>

          <Pressable style={styles.close} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#1a1a2e",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#fca5a5",
    marginBottom: 10,
  },
  desc: {
    fontSize: 15,
    color: "#e5e7eb",
    textAlign: "center",
    marginBottom: 14,
  },
  points: {
    alignSelf: "stretch",
    marginBottom: 20,
  },
  point: {
    color: "#fde68a",
    fontSize: 14,
    marginVertical: 3,
    textAlign: "center",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#7c3aed",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    letterSpacing: 1,
  },
  close: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  closeText: {
    color: "#9ca3af",
    fontSize: 18,
  },
});