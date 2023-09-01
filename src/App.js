import "./App.css";
// import Test from "./Testing";
// import Test2 from "./Test2";
import { useEffect, useState } from "react";
import Wordle from "./Wordle";
import footer from './assets/images/SHOURYA-nobg.png'

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
  const [word, setWord]=useState([])

  const [hiddenWord, setHiddenWord] = useState("");


 const pickRandomWord = () => {
  let randomIndex;
  if(word.length>0){
    randomIndex = Math.floor(Math.random() * word.length);
    setHiddenWord(word[randomIndex].toLowerCase());

  }

 
 };

 async function fetchData() {
   try {
     const response = await fetch(`https://wordle-backend-okjv.vercel.app/words`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ _id: "64ed8bb265bd22f692e9daae" }),
     });
     
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     
     const data = await response.json();
     setWord(data)
   } catch (error) {
     console.error('Fetch error:', error);
   }
 }
  useEffect(() => {
    
    fetchData();
  },[]);

  useEffect(()=>{
    let randomIndex;
    if(word.length>0){
    randomIndex = Math.floor(Math.random() * word.length);
    setHiddenWord(word[randomIndex].toLowerCase());

  }
  },[word])

  return (
    <div className="App">
      <div style={{margin:"10px 2px"}}> <h1>Wordle </h1></div>
      <Wordle solution={hiddenWord} />
      <div className="footer">
        🕹️<a href="https://shouryasrivastava001.netlify.app">Shourya Srivastava</a>
      </div>
      
    </div>
  );
}

