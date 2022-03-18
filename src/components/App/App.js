import './App.css';
import location from '../../assets/location.png'

function App() {
  return (
    <div className="App">
      <div className="location-and-city-state">
        <img src={location} alt='location indicator'></img>
        <h1>Dallas, TX</h1>
      </div>
      <h2></h2>
    </div>
  );
}

export default App;
