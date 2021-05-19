import logo from './logo.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
	<h1>DevSchar</h1>  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Front end Developer
        </p>
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
