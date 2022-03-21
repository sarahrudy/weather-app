import './App.css'
import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Forecast from '../Forecast/Forecast'
import { getAllWeatherData } from '../../apiCalls'
import loadingIcon from '../../assets/loading.gif'

const App = () => {
  const [weather, setWeather] = useState({})
  const [error, setError] = useState(false)

  useEffect (() => {
    getAllWeatherData()
    .then(data => setWeather(data))
    .catch(error => setError(error))
  }, [])

  return (
    <div className="App">
      <Header weather={ weather } />
      <Main weather={ weather } /> 
      <Forecast weather={ weather } />
    </div>
  );
}

export default App;
