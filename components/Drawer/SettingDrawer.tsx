import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useUIControls } from "../../context/UIControlContext";

type ToggleRowProps = {
  label: string;
  value: boolean;
  onPress: () => void;
};

function ToggleRow({ label, value, onPress }: ToggleRowProps) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>

      <View
        style={[
          styles.toggle,
          value && styles.toggleOn,
        ]}
      >
        <View
          style={[
            styles.knob,
            value && styles.knobOn,
          ]}
        />
      </View>
    </Pressable>
  );
}

export default function SettingsDrawer() {
  const insets = useSafeAreaInsets();
  const {
    drawerOpen,
    closeDrawer,
    musicOn,
    soundOn,
    toggleMusic,
    toggleSound,
  } = useUIControls();

  if (!drawerOpen) return null;

  return (
    <Pressable style={styles.overlay} onPress={closeDrawer}>
      <Pressable
        style={[
          styles.drawer,
          { paddingBottom: insets.bottom + 24 },
        ]}
        onPress={() => {}}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>

          <Pressable
            onPress={closeDrawer}
            hitSlop={12}
            style={({ pressed }) => [
              styles.closeBtn,
              pressed && { opacity: 0.6 },
            ]}
          >
            <Ionicons
              name="close"
              size={22}
              color="#fca5a5"
            />
          </Pressable>
        </View>

        {/* AUDIO */}
        <Text style={styles.section}>Audio</Text>

        <ToggleRow
          label="Music"
          value={musicOn}
          onPress={toggleMusic}
        />

        <ToggleRow
          label="Sound"
          value={soundOn}
          onPress={toggleSound}
        />

        {/* INFO */}
        <Text style={styles.section}>Info</Text>

        <Pressable style={styles.link}>
          <Ionicons
            name="document-text-outline"
            size={18}
            color="#d1d5db"
          />
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Pressable>

        <Pressable style={styles.link}>
          <Ionicons
            name="help-circle-outline"
            size={18}
            color="#d1d5db"
          />
          <Text style={styles.linkText}>How to Play</Text>
        </Pressable>

        <Pressable style={styles.link}>
          <Ionicons
            name="shield-checkmark-outline"
            size={18}
            color="#d1d5db"
          />
          <Text style={styles.linkText}>Terms of Use</Text>
        </Pressable>
      </Pressable>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "flex-end",
  },

  drawer: {
    backgroundColor: "#1a1a2e",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#fca5a5",
  },

  closeBtn: {
    padding: 4,
  },

  section: {
    marginTop: 18,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.4,
    color: "#9ca3af",
    textTransform: "uppercase",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#e5e7eb",
  },

  toggle: {
    width: 46,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#374151",
    padding: 3,
  },

  toggleOn: {
    backgroundColor: "#fca5a5",
  },

  knob: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#111827",
  },

  knobOn: {
    alignSelf: "flex-end",
    backgroundColor: "#1a1a2e",
  },

  link: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
  },

  linkText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#d1d5db",
  },
});