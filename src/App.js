import "./App.css";
// import Test from "./Testing";
// import Test2 from "./Test2";
import { useEffect, useState } from "react";
import Wordle from "./Wordle";

export default function App() {
  const wordList = [
    "apple",
    "banana",
    "cherry",
    "grape",
    "orange",
    "kiwi",
    "lemon",
    "pear"
  ];

  const [hiddenWord, setHiddenWord] = useState("");

  useEffect(() => {
    pickRandomWord();
  }, []);

  const pickRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    setHiddenWord(wordList[randomIndex].toLowerCase());
  };
  return (
    <div className="App">
      <h1>{hiddenWord}</h1>
      <Wordle solution={hiddenWord} />
    </div>
  );
}

