import { useState } from "react"

function App() {
  const [color, setColor] = useState("black");

  return (
    
    <>
      <div style={{backgroundColor: color}} className="h-screen w-full duration-500">
        <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0">
          <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl ">
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-lime-500" onClick={ () => { setColor("olive")}} >
              Olive
            </button> 
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600 " onClick={ () => { setColor("green")}} >
              Green
            </button>
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-teal-500" onClick={ () => { setColor("teal")}} >
              Teal
            </button> 
            <button 
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-pink-500"  onClick={ () => { setColor("pink")}} >
              Pink
            </button> 
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-400" onClick={ () => { setColor("yellow")}} >
              Yellow
            </button>
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-lime-400" onClick={ () => { setColor("lime")}} >
              Lime
            </button> 
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-indigo-500" onClick={ () => { setColor("indigo")}} >
              Indigo
            </button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
