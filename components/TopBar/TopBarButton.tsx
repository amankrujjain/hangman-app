import { Pressable, StyleSheet } from "react-native";
import { ReactNode } from "react";
import { useUIControls } from "../../context/UIControlContext";

type Props = {
  children: ReactNode;
  onPress: () => void;
};

export default function TopBarButton({ children, onPress }: Props) {
  const { click } = useUIControls();

  return (
    <Pressable
      onPress={() => {
        click();
        onPress();
      }}
      style={({ pressed }) => [
        styles.btn,
        pressed && { opacity: 0.6 },
      ]}
      hitSlop={12}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 8,
  },
});