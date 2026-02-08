import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function AppLoader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ff6b6b" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#1a1a2e",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
});