import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")
  return (
   <div
const className="w-full h-screen duration-200"
style={{backgroundColor:color}}>

<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
  <div className='fixed flex flex-wrap justify-center gap-3 px-3 py-1 bg-white rounded-full'>
    <button
    onClick={()=>setColor("red")}
     className='outline-none px-4 py-3 rounded-full'
    style={{backgroundColor:"red"}}>red</button>
    <button 
    onClick={()=>setColor("pink")}
    className='outline-none px-4 py-3 rounded-full'
    style={{backgroundColor:"pink"}}>pink</button>
    <button
    onClick={()=>setColor("green")}
    className='outline-none px-4 py-3 rounded-full'
    style={{backgroundColor:"green"}}>green</button>
    <button
    onClick={()=>setColor("orange")}
    className='outline-none px-4 py-3 rounded-full'
    style={{backgroundColor:"orange"}}>orange</button>
  </div>
  </div>
   </div>
    
  )
}

export default App
