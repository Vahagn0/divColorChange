import { useState } from 'react';
import './App.css';



function App() {

  const [color,setColor] = useState("black")

  return (
    <div>
      <button onClick={()=>{
        setColor("#fc0303")
      }}>red</button>
      <button onClick={()=>{
        setColor("green")
      }}>green</button>
      <button onClick={()=>{
        setColor("purple")
      }}>purple</button>
      <div className="App" style={{backgroundColor:color}}>
      </div>
    </div>
    
  );
}


export default App;
