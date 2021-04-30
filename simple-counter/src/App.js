import {useRef, useState} from 'react'
import './App.css';

function App() {
  
  let [contador1, updateContador1] = useState(0);
  
  setInterval(() =>{
    updateContador1(contador1 + 1);
    if(contador1 >= 9){
      updateContador1(0);
    }
  },1000)
  
  return (
    <div className="App">
      
      <h1>{contador1}</h1>
      <h2>Valor del contador</h2>
    </div>
  );

}

export default App;
