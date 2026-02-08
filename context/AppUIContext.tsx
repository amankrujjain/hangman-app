import React, { createContext, useContext, useState } from "react";

type AppUIContextType = {
  isAppLoading: boolean;
  setAppLoading: (v: boolean) => void;
};

const AppUIContext = createContext<AppUIContextType | null>(null);

export const AppUIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <AppUIContext.Provider
      value={{
        isAppLoading,
        setAppLoading: setIsAppLoading,
      }}
    >
      {children}
    </AppUIContext.Provider>
  );
};

export const useAppUI = () => {
  const ctx = useContext(AppUIContext);
  if (!ctx) {
    throw new Error("useAppUI must be used inside AppUIProvider");
  }
  return ctx;
};