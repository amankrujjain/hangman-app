import { View, StyleSheet } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopBarButton from "./TopBarButton";
import { useUIControls } from "../../context/UIControlContext";

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();
  const { musicOn, toggleMusic, openDrawer } = useUIControls();
  const insets = useSafeAreaInsets();

  const isHome = pathname === "/";

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + 0.9 }, // 👈 THIS FIXES OVERLAP
      ]}
    >
      {/* Back */}
      <View>
        {/* ✅ CHANGE: hide ONLY back button on Home */}
        {!isHome && (
          <TopBarButton
            onPress={() => {
              if (router.canGoBack()) router.back();
            }}
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color="#fff"
            />
          </TopBarButton>
        )}
      </View>

      {/* Right actions */}
      <View style={styles.right}>
        {/* <TopBarButton onPress={toggleMusic}>
          <Ionicons
            name={musicOn ? "volume-high" : "volume-mute"}
            size={22}
            color="#fff"
          />
        </TopBarButton> */}

        <TopBarButton onPress={openDrawer}>
          <Ionicons name="settings-outline" size={22} color="#fff" />
        </TopBarButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  minHeight: 56,
  paddingBottom: 6,
  paddingHorizontal: 16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#1a1a2e",
  borderBottomWidth: 1,
  borderBottomColor: "rgba(255,255,255,0.08)",
},
  right: {
    flexDirection: "row",
    gap: 14,
  },
});