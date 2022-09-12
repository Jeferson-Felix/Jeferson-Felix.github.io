import foto from '../media/foto.jpg';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} alt="foto" className="App-logo"/>
        <p>
          <p className="App-title">
            Jeferson Felix
            <p className='App-subtitle'>
              Junior Front-End Developer
            </p>
          </p>
        </p>
        <div className='App-icons'>
          <a
            className='App-link'
            href="https://github.com/jeferson-felix"
            target="_blank"
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
          </a>
            <a
            className='App-link'
            href="https://www.instagram.com/jeff.felix_/"
            target="_blank"
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} size="lg"></FontAwesomeIcon>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
