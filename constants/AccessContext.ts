import { GameMode } from "./gameModes";

// ❌ DO NOT use hooks directly here
// AccessControl must be PURE

// ✅ Instead: pass premium flag
export const isModeLocked = (
  mode: GameMode,
  isPremium: boolean
) => {
  if (mode === "fun") return false;
  return !isPremium;
};