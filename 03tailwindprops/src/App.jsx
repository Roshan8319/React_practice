import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
let myObj ={
  userName: "Roshan",
  age: 21
}
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
       <Card username="Roshan" btnText="click here" />  {/* // if you call card tag again than the card will be displayed twice that is, it'll repeat the task */}
      <Card username="Pawan"  />


     

    </>
  )
}

export default App
