import React, { createContext, useContext, useState } from "react";
import { GameMode } from "../constants/gameModes";
import { WORDS } from "../constants/gameWords";
import { DARES } from "../constants/gameDares";
import { MAX_WRONG_BY_MODE } from "../constants/gameRules";

type GameContextType = {
  mode: GameMode;
  word: string;
  hint: string;
  guessedLetters: string[];
  wrongGuesses: number;
  isGameOver: boolean;
  isWin: boolean;
  dare?: string;

  startGame: (mode: GameMode) => void;
  guessLetter: (letter: string) => void;
  playAgain: () => void;
  goHome: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<GameMode>("fun");
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [dare, setDare] = useState<string>();

  const startGame = (selectedMode: GameMode) => {
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

      if (nextWrong >= MAX_WRONG_BY_MODE[mode]) {
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