import { GameMode } from "./gameModes";

export const MAX_WRONG_BY_MODE: Record<GameMode, number> = {
  fun: 6,
  spicy: 6,
  chaos: 4, // 😈 harder
};