import logoPodCast from './logoPodCast.png';
import './App.css';

const url ='https://yt3.ggpht.com/_rY7SFAnLoqJdr8582bQDh1Uf1WWXMUY51TtmI7QbxuwJDX7cra5q7ZBGvR7cR1v7HxVD6Lz=s100-c-k-c0x00ffffff-no-rj'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img href={url} className="App-logo" alt="logo" />
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
