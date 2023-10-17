import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(15)

  const addValue = ()=>{
    
    counter=counter+1;
    setCounter(counter);
    console.log("clicked",counter)
  }

  const removeValue =()=>{
    counter=counter-1;
    setCounter(counter);
    console.log("remove value",counter)
  }

  return (
    <>
    <div>
      <h1>hi this is react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </div>
    </>
  )
}

export default App
