import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      
      
        <div>
          
          {isCorrect ?  (<h1>You Win 😃</h1>):(<h1>Unlucky 🥺</h1>)}
          {isCorrect ?  (<p style={{margin:"10px 0"}}>You found the word in {turn} guesses</p>):(<p style={{margin:"10px 0"}}>Better luck next time</p>)}
          <p className="solution">{solution}</p>
          <button onClick={()=>window.location.reload()}>New Game</button>
          
        </div>
      
    </div>
  )
}