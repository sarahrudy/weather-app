import './App.css'
import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Forecast from '../Forecast/Forecast'
import { getData } from '../../apiCalls'

const App = () => {
  const [forecast, setForecast ]  = useState([])

  const setCity = (id) => {
    getData(id)
    .then(data => setForecast(data))
  }

  useEffect(() => {
    setCity('4684888')
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Main />
      <Forecast />
    </div>
  );
}

export default App;
