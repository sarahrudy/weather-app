import './App.css'
import { useState } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Forecast from '../Forecast/Forecast'

const App = () => {
  const [forecast, setForecast ]  = useState([])

  // APIcall 
  
  return (
    <div className="App">
      <Header />
      <Main />
      <Forecast />
    </div>
  );
}

export default App;
