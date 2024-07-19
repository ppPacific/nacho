import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className={"min-h-screen"}>
            <h1>Vite + React {count}</h1>
            <button onClick={()=> setCount(count+1)}>tryme</button>
            <div className={"relative"}>
                <button
                    className={"bottom-0 rounded-2xl border-2 border-blue-500 p-2 bg-blue-500 text-white"}>
                    New </button>
            </div>
        </div>


    </>
  )
}

export default App
