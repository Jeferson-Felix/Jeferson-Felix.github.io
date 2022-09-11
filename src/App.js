import foto from './foto.jpg';
import './App.css';
import githublogo from './github-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} alt="foto" className="App-logo"/>
        <p>
          <p className="App-name">Jeferson Felix</p>
          Junior Front-End Developer
        </p>
        <a
          href="https://github.com/jeferson-felix"
          target="_blank"
        >
          <img src={githublogo} className="App-Link"></img>
        </a>
      </header>
    </div>
  );
}

export default App;
