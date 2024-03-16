import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] = useState(0)
  // let counter = 10

  const addValue = () => {
      
      console.log("clicked: ", Math.random());
      if(counter!=20){
      setCounter(counter+1)
      }
      
  }
  const removeValue = () =>{
    if(counter != 0){
        setCounter(counter-1)
    }
  
 }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value : {counter}</h2>

      <button 
      onClick={addValue}>
        Add value
      </button>
      <br/>
      <button
        onClick={removeValue}>
        remove value
      </button>
    </>
  )
}

export default App






// for updating any values in UI we have to use Hooks 
// we can't update directly in UI