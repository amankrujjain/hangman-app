import React, { createContext, useContext, useState } from "react";

type Mode = "fun" | "spicy" | "chaos";

type WordItem = {
  word: string;
  hint: string;
};

const MAX_WRONG = 6;

const WORDS: Record<Mode, WordItem[]> = {
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
  ],
   chaos: [ // ✅ ADD
    { word: "ANARCHY", hint: "Complete disorder" },
    { word: "MADNESS", hint: "Extreme chaos" },
    { word: "PANDEMONIUM", hint: "Wild uproar" },
  ],
};

const DARES: Record<Mode, string[]> = {
  fun: [
    "🐔 Do your best chicken dance for 30 seconds!",
    "🎤 Sing the alphabet backwards!",
    "🤪 Make the ugliest face you can!",
    "🕺 Do a dramatic slow-motion walk!",
  ],
  spicy: [
    "💋 Send a flirty text!",
    "🔥 Do your most seductive walk!",
    "😏 Give someone a sultry compliment!",
    "💌 Write a cheesy love line!",
  ],
  chaos: [ // ✅ ADD
    "😈 Spin around 10 times!",
    "💥 Scream your favorite word!",
    "🌀 Close eyes for 20 seconds!",
  ],
};

type GameContextType = {
  mode: Mode;
  word: string;
  hint: string;
  guessedLetters: string[];
  wrongGuesses: number;
  isGameOver: boolean;
  isWin: boolean;
  dare?: string;

  startGame: (mode: Mode) => void;
  guessLetter: (letter: string) => void;
  playAgain: () => void;
  goHome: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<Mode>("fun");
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [dare, setDare] = useState<string>();

  const startGame = (selectedMode: Mode) => {
    const list = WORDS[selectedMode];
    const random = list[Math.floor(Math.random() * list.length)];

    setMode(selectedMode);
    setWord(random.word);
    setHint(random.hint);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setIsGameOver(false);
    setIsWin(false);
    setDare(undefined);
  };

  const guessLetter = (letter: string) => {
    if (guessedLetters.includes(letter) || isGameOver) return;

    const nextGuessed = [...guessedLetters, letter];
    setGuessedLetters(nextGuessed);

    if (!word.includes(letter)) {
      const nextWrong = wrongGuesses + 1;
      setWrongGuesses(nextWrong);

      if (nextWrong >= MAX_WRONG) {
        setIsGameOver(true);
        setIsWin(false);
        const list = DARES[mode];
        setDare(list[Math.floor(Math.random() * list.length)]);
      }
    } else {
      const hasWon = word
        .split("")
        .every((l) => nextGuessed.includes(l));

      if (hasWon) {
        setIsGameOver(true);
        setIsWin(true);
      }
    }
  };

  const playAgain = () => {
    startGame(mode);
  };

  const goHome = () => {
    setIsGameOver(false);
  };

  return (
    <GameContext.Provider
      value={{
        mode,
        word,
        hint,
        guessedLetters,
        wrongGuesses,
        isGameOver,
        isWin,
        dare,
        startGame,
        guessLetter,
        playAgain,
        goHome,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside GameProvider");
  return ctx;
};