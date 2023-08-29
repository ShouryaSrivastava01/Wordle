import React, { useEffect, useState } from "react";
import useWordle from "./hooks/useWordle";
import keys from '../src/utils/Key'
import Grid from "./Grid";
import Modal from "./utils/Modal";


export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, len, usedKeys } = useWordle(
    solution
  );
  const [showModal, setShowModal] = useState(false)
  const [letters, setLetters] = useState(null)
  
  useEffect(() => {
    setLetters(keys)
  }, [])

  
  useEffect(() => {
    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
    }

  }, [isCorrect, turn])
  
  return (
    <div className="wordle">
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} len={len}/>
      {/* <Keypad keys={keys} usedKeys={usedKeys} handleKeyClick={handleKeyClick}/> */}

      


      <div className="keypad">
        
    <div className="key-row">

      {letters && letters.slice(0,10).map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={`key ${color}`}>   <button onClick={() => handleKeyup(`${l.key}`)}>{l.key}</button></div>
          
          )
        })}
        </div>
      
        <div  className="key-row">

      {letters && letters.slice(10,19).map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={`key ${color}`}>   <button onClick={() => handleKeyup(`${l.key}`)}>{l.key}</button></div>
          
          )
        })}
        </div>
        <div  className="key-row">

      {letters && letters.slice(19).map(l => {
        const color = usedKeys[l.key]
        const content = l.key === 'Backspace' ? '⌫' : l.key;
        return (
          
          <div key={l.key} className={`key ${color}`} style={{ width: l.key === 'Backspace' || l.key === 'Enter' ? '15%' : '7%' }}>
            
            <button onClick={() => handleKeyup(`${l.key}`)} style={{ fontSize: l.key === 'Backspace' || l.key === 'Enter' ? '15px' : '20px' }}> 
              {content}
              
            </button></div>
          
          )
        })}
        
        </div>

        
    </div>

    </div>
  );
}

