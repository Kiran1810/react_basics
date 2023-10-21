import { useCallback, useState,useEffect } from 'react'



function App() {
  const [number , setnumber] = useState(false)
  const [character , setcharacter] = useState(false)
  const [ lowerCase, setlowerCase] = useState(false)
  const [ upperCase, setupperCase] = useState(false)
  const [ length, setlength] = useState(8)
  const [ password, setPassword] = useState("")


  const passwordGenerate =useCallback(()=>{
 let charset="";
 let newPassword="";

 if(number) charset+="0123456789";
 if(character) charset+="@#$%&*!";
 if(lowerCase) charset+="abcdefghijklmnopqrstuvwxyz";
 if(upperCase) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 for (let i = 0; i <length; i++) { 
  newPassword += charset.charAt( 
      Math.floor(Math.random() * charset.length) 
  ); 
} 

setPassword(newPassword); 


  },[length,number,character,setPassword])
  useEffect(()=>{passwordGenerate()},[number,character,length,passwordGenerate])
  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 my-10 text-orange-500 bg-gray-900'>
    <h1 className='text-white my-3 text-center'>Password Generator</h1>
    <div className='rounded-lg overflow-hidden mb-4 flex'>
      <input
        type="text"
        value={password}
        className='outline-none flex-grow py-1 px-3'
        placeholder="Password"
        readOnly
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5'>Copy</button>
    </div>
    <div className='mb-4'>
        <div className='flex items-center gap-x-1'>
        <input
          type="range"
          min={4}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(event)=>{setlength(event.target.value)}}
        />
        <label>length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
          type="checkbox"
           defaultChecked={number}
          onChange={()=>{setnumber((prev)=>!prev);
          }}
        />
        <label>number:{number}</label>
  </div>
  <div className='flex items-center gap-x-1'>
        <input
          type="checkbox"
           defaultChecked={character}
          onChange={()=>{setcharacter((prev)=>!prev);
          }}
        />
        <label>character:{character}</label>
  </div>
  </div>
  
    </div>
  )
}

export default App
