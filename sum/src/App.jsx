import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aboutme from './compon/Aboutme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Aboutme/>
    </>
    
  )
}

export default App
