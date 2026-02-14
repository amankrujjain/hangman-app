import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getPremium,
  setPremium,
  clearPremium,
} from "../storage/premiumStorage";

type PremiumContextType = {
  isPremium: boolean;
  unlockPremium: () => Promise<void>;
  resetPremium: () => Promise<void>; // dev/testing
};

const PremiumContext =
  createContext<PremiumContextType | null>(null);

export const PremiumProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🔄 Load from AsyncStorage on app start
  useEffect(() => {
    (async () => {
      const value = await getPremium();
      setIsPremium(value);
      setLoading(false);
    })();
  }, []);

  const unlockPremium = async () => {
    await setPremium();
    setIsPremium(true);
  };

  const resetPremium = async () => {
    await clearPremium();
    setIsPremium(false);
  };

  if (loading) return null; // splash later

  return (
    <PremiumContext.Provider
      value={{
        isPremium,
        unlockPremium,
        resetPremium,
      }}
    >
      {children}
    </PremiumContext.Provider>
  );
};

export const usePremium = () => {
  const ctx = useContext(PremiumContext);
  if (!ctx)
    throw new Error(
      "usePremium must be used inside PremiumProvider"
    );
  return ctx;
};