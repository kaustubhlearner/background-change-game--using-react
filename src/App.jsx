import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("black")

  return (
    <div style={{backgroundColor: color, width:"vw", height:"100vh"}}>
      <button style={{backgroundColor:"red", cursor:"pointer", width: "60px", height:"40px"}} onClick={(()=>{setcolor("red")})}>Red</button>
      <button style={{backgroundColor:"pink", cursor:"pointer", width: "60px", height:"40px"}} onClick={(()=>{setcolor("pink")})}>Pink</button>
      <button style={{backgroundColor:"yellow",cursor:"pointer", width: "60px", height:"40px"}} onClick={(()=>{setcolor("yellow")})}>Yellow</button>
      <button style={{backgroundColor:"green",cursor:"pointer", width: "60px", height:"40px"}} onClick={(()=>{setcolor("green")})}>Green</button>
      <button style={{backgroundColor:"white",cursor:"pointer", width: "60px", height:"40px"}} onClick={(()=>{setcolor("white")})}>white</button>
      <button style={{backgroundColor:"black", color:"white",cursor:"pointer", width: "60px", height:"40px"}} onClick={(()=>{setcolor("black")})}>Black</button>
      <button style={{backgroundColor:"blue",cursor:"pointer", width: "60px", height:"40px"}} onClick={(()=>{setcolor("blue")})}>Blue</button>
      <button style={{backgroundColor:"green",cursor:"pointer", width: "60px", height:"40px"}} onClick={(()=>{setcolor("orange")})}>Orange</button>
      </div>
  )
}

export default App
