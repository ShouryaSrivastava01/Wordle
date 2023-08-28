import React, { useEffect, useState } from "react";
import useWordle from "./hooks/useWordle";
import Keypad from './Keyboard'
import keys from '../src/utils/Key'
import Grid from "./Grid";
import Modal from "./utils/Modal";


export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, len, usedKeys } = useWordle(
    solution
  );
  const [showModal, setShowModal] = useState(false)
    
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])
  
  return (
    <div>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} len={len}/>
      <Keypad keys={keys} usedKeys={usedKeys}/>
    </div>
  );
}

