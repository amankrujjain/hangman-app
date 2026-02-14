import AsyncStorage from "@react-native-async-storage/async-storage";

const PREMIUM_KEY = "@hagman_is_premium";

// ✅ Save premium
export const setPremium = async () => {
  await AsyncStorage.setItem(PREMIUM_KEY, "true");
};

// ✅ Remove premium (for testing / logout / reset)
export const clearPremium = async () => {
  await AsyncStorage.removeItem(PREMIUM_KEY);
};

// ✅ Read premium
export const getPremium = async (): Promise<boolean> => {
  const value = await AsyncStorage.getItem(PREMIUM_KEY);
  return value === "true";
};