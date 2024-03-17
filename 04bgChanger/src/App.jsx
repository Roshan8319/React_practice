import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
     
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
            <button 
            onClick={() => setColor("red")} className="bg-red-600 rounded-full w-20 py-2 text-xl text-white shadow-2xl">Red</button>

            <button 
             onClick={() => setColor("yellow")}
            className="bg-yellow-500 rounded-full w-20 py-2 text-xl text-black shadow-2xl">Yellow </button>

            <button
             onClick={() => setColor("blue")}
            className="bg-blue-600 rounded-full w-20 py-2 text-xl text-white shadow-2xl">Blue</button>

            <button 
             onClick={() => setColor("green")}
            className="bg-green-600 rounded-full w-20 py-2 text-xl text-white shadow-2xl">green</button>

            <button 
             onClick={() => setColor("brown")}
            className="bg-amber-800 rounded-full w-20 py-2 text-xl text-white shadow-2xl">brown</button>

            <button 
             onClick={() => setColor("pink")}
            className="bg-pink-800 rounded-full w-20 py-2 text-xl text-white shadow-2xl">pink</button>
            
            <button 
             onClick={() => setColor("fuchsia")}
            className="bg-fuchsia-500 rounded-full w-20 py-2 text-xl text-white shadow-2xl">lavender</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
