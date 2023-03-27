import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Image from './components/Image';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Image img="https://konachan.net/jpeg/c994a53414e877d2eb2a89387b1f47c3/Konachan.com%20-%20354837%20barefoot%20blue_eyes%20blue_hair%20blush%20butterfly_hair_ornament%20dress%20flowers.jpg" alt="anime" />
        <Button testo="Mollami JS" />

      </header>
    </div>
  );
}

export default App;



