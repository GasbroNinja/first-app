import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Image from './components/Image';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Image img="..." alt="anime" />
        <Button testo="Mollami JS" />

      </header>
    </div>
  );
}

export default App;



