import './App.css'
import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Forecast from '../Forecast/Forecast'
import { getAllWeatherData } from '../../apiCalls'
import loadingIcon from '../../assets/loading.gif'

const App = () => {
  const [weather, setWeather] = useState({})
  const [isF, setIsF] = useState(true)
  const [error, setError] = useState(false)

  useEffect (() => {
    getAllWeatherData()
    .then(data => setWeather(data))
    .catch(error => setError(error))
  }, [])

  const handleToggle = () => {
    setIsF(!isF)
    console.log(isF)
  }

  return (
    <div className="App">
      <Header weather={ weather } />
      <Main weather={ weather } isF={ isF } handleToggle={ handleToggle } /> 
      <Forecast weather={ weather } isF={ isF } />
    </div>
  );
}

export default App;
