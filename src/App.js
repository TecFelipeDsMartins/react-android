import logo from "./logo.jpg";
import "./App.css";
import {useState,useEffect} from "react";

function App() { 
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [result, setResult] = useState(0)
  const handleClick=(e)=>{
     setCount((count)=>++count)
 }
  const handleClick2=(e)=>{
     setCount2((count2)=>++count2)
 }

 useEffect(()=>{
	 setResult((result)=>result=count+count2)})

  return (
    <div className="App">
      <header className="App-header">

        <h1>{count}</h1>
	<hr/>
        <h1>{count2}</h1>
	<h1>{result}</h1>  
        <img onClick={handleClick}  src={logo} className="App-logo" alt="logo" />

        <p>Front end Developer</p>
        <a
          className="App-link"
          href="https://github.com/TecFelipeDsMartins"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/TecFelipeDsMartins
        </a>
      </header>
    </div>
  );
}

export default App;
