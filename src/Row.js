import React from "react";

export default function Row({ currentGuess, guess, len }) {
  
  
  if(guess) {
    return (
      <div className="row current" >
        {guess.map((letter, i) => (
          <p key={i} className={`filled  letter ${letter.color}`} style={{background:`${letter.color}`}}>
            {letter.key}
          </p>
        ))}
       
      
      </div>
    );
  }
  else{
    let letters = currentGuess.split("");
    return (
        <div className="row current">
        {letters.map((letter, i) => (
            <p key={i} className="filled letter">
            {letter}
          </p>
        ))}
        {[...Array(len - letters.length)].map((_,i) => (
            <p key={i} className="filled letter"> &nbsp;</p>
            ))}
       
      </div>
    );
}
  

 
}
