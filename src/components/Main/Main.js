import './Main.css'
import cityImage from '../../assets/city-image.png'
import cloudLeft from '../../assets/cloud-left.png'
import cloudRight from '../../assets/cloud-right.png'
import thunderstorm from '../../assets/storm.png'
import drizzle from '../../assets/drizzle.png'
import rain from '../../assets/rain.png'
import snow from '../../assets/snow.png'
import clear from '../../assets/clear.png'
import clouds from '../../assets/cloud-sun.png'
import mist from '../../assets/mist.png'
import fog from '../../assets/fog.png'
import tornado from '../../assets/tornado.png'
import Toggle from '../Toggle/Toggle'

const Main = ({ weather, isF, handleToggle }) => {

  const weatherMap = {
    "Thunderstorm": thunderstorm,
    "Drizzle": drizzle,
    "Rain": rain,
    "Snow": snow,
    "Clear": clear,
    "Clouds": clouds,
    "Mist": mist,
    "Smoke": fog,
    "Haze":  fog,
    "Dust": fog,
    "Fog": fog,
    "Sand": fog,
    "Dust": fog,
    "Ash": fog,
    "Squall": mist,
    "Tornado": tornado,
  }

  if(!weather.current) {
    return <h2>is loading...</h2>
  }

  const tempF = Math.round(weather.current.temp)
  const tempC = Math.round((tempF - 30) /2)

  return (
    <div className="Main">
      <div className="top-elements">
        <div className="temp-container">
          { (isF) ? <h3>{ tempF }°</h3> : <h3>{ tempC }°</h3> }
          <img src={ weatherMap[weather.current.weather[0].main] } alt="cloud in front of sun" />
          <div className="weather-condition-plus-wind">
            <h4>{ weather.current.weather[0].main }</h4> 
            <h5>{ Math.round(weather.current.wind_speed) } mph</h5>
          </div>
        </div>
        <div className="toggle-switch">
          <Toggle degrees={ isF } handleToggle={ handleToggle }/>
        </div>
      </div>
      <div className="clouds-and-city">
        <img className="city-image" src={ cityImage } alt="city skyline"></img>
        <img className="cloud-left" src={ cloudLeft } alt="cloud"></img>
        <img className="cloud-right" src={ cloudRight } alt="cloud"></img>
      </div>
    </div>
  );
}

export default Main;