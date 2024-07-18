import {  useCallback, useEffect, useRef, useState } from 'react'


function App() {
const [length, setLength]=useState(6)
const [numberAllowed,setNumberAllowed]= useState(false)
const [CharactersAllowed, setCharacterAllowed]= useState(false)
const [password, setPassword]=useState("")

const passwordRef = useRef(null)



const passwordGenerator= useCallback(function(){
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  
  if(CharactersAllowed)str += "!@#$%^&*(){}?"
  
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char)
  }
  setPassword(pass)
},[length,numberAllowed,CharactersAllowed,setPassword])

{
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,CharactersAllowed,passwordGenerator])
}

const copyPassword = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
})

  return (
    <>
      
      <h1 className='text-white text-center text-6xl'>Password Generator</h1>
      <div className='bg-gray-600  px-4 py-4 mt-2 w-full max-w-md mx-auto rounded-lg'>
          <div className='className=" flex shadow rounded-lg mb-4"'>
          <input 
          type="text" 
          value={password}
          placeholder='Password'
          readOnly
          className='outline-none w-full py-1 px-3 rounded-l-lg'
          ref={passwordRef}
          />
          <button
            className='bg-blue-500 text-white font-bold px-2 rounded-r-lg'
            onClick={copyPassword}
          >
            Copy
          </button>
          </div>
          <div className='text-orange-500 flex items-center py-3'>
            <input 
              type="range"
              min={6}
              max={16}
              value={length}
              className='cursor-pointer '
              onChange={(e) =>{ setLength(e.target.value)}}

            />
            <label className='font-bold ml-2'>Length: {length}</label>
            <input 
            className='ml-auto'
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed((prev)=> !prev)
              }}
            />
            <label>Numbers</label>
            <input 
            className='ml-auto'
              type="checkbox"
              defaultChecked={CharactersAllowed}
              onChange={()=>{
                setCharacterAllowed((prevValue)=>!prevValue)
              }}
            />
            <label>Characters</label>

          </div>
          <div className='text-orange-500 flex items-center py-3'>
            <button className='bg-orange-400 text-black font-bold px-2 rounded-lg'
            
            onClick={passwordGenerator}
            >Generate</button>
          </div>
      </div>
    </>
  )
}

export default App
