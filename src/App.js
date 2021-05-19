import logo from './logo.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.google.com/search?q=lagoinha+poa&client=ms-android-samsung&prmd=imsvn&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiFsa_LjNTwAhXCGLkGHRZEDb8Q_AUoAXoECAEQAQ&biw=320&bih=454&dpr=1.5#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
