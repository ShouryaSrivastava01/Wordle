import React from "react";
import Row from "./Row";

export default function Grid({ guesses, currentGuess, turn, len }) {
   
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} guess={null} len={len}/>;
        }
        return   <Row key={i} currentGuess={null} guess={g} len={len}  />

        
       
         
       
      })}
    </div>
  );
}
