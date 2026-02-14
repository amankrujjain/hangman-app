import { GameMode } from "./gameModes";

export type WordItem = {
  word: string;
  hint: string;
};

export const WORDS: Record<GameMode, WordItem[]> = {
  fun: [
    { word: "BANANA", hint: "Yellow fruit monkeys love" },
    { word: "PIZZA", hint: "Italian round delight" },
    { word: "UNICORN", hint: "Magical horned horse" },
    { word: "TICKLE", hint: "Makes you laugh uncontrollably" },
  ],
  spicy: [
    { word: "FLIRT", hint: "Playful romantic attention" },
    { word: "SEDUCE", hint: "To charm romantically" },
    { word: "DESIRE", hint: "Strong wanting" },
    { word: "PASSION", hint: "Intense emotion" },
  ]
};