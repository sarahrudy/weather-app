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

const Main = ({ weather }) => {

  const weatherMap = {
    "Thunderstorm": thunderstorm,
    "Drizzle": drizzle,
    "Rain": rain,
    "Snow": snow,
    "Clear": clear,
    "Clouds": clouds 
  }

  if(!weather.current) {
    return <h2>is loading...</h2>
  }

  return (
    <div className="Main">
      <div className="temp-container">
        <h3>{ Math.round(weather.current.temp) }°</h3>
        <img src={ weatherMap[weather.current.weather[0].main] } alt="cloud in front of sun" />
        <h4>{ weather.current.weather[0].main }</h4> 
        <h5>{ Math.round(weather.current.wind_speed) } mph</h5>
      </div>
      <div className="toggle-switch">
        <input type="checkbox" name="toggleSwitch" id="toggleSwitch" value="C°"/>
        <label className="toggle-switch-label" htmlFor="toggleSwtich">C°</label>
      </div>
      <div className="clouds-and-city">
        <img className="cloud-left" src={ cloudLeft } alt="cloud"></img>
        <img className="city-image" src={ cityImage } alt="city skyline"></img>
        <img className="cloud-right" src={ cloudRight } alt="cloud"></img>
      </div>
    </div>
  );
}

export default Main;