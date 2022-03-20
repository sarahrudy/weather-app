import './Main.css'
import cityImage from '../../assets/city-image.png'
import cloudSun from '../../assets/cloud-sun.png'
import cloudLeft from '../../assets/cloud-left.png'
import cloudRight from '../../assets/cloud-right.png'
import clear from '../../assets/sunny.png'

const Main = ({ weather }) => {
  console.log(weather)

// weather map for weather images 
//   const weatherMap = {
//   "clear": "sunny.png",
//   "scattered-showers": "rainy.png",
// }

  if(!weather.current) {
    return <h2>is loading...</h2>
  }

  return (
    <div className="Main">
      <div className="temp-container">
        <h3>{ Math.round(weather.current.temp) }°</h3>
        <img src={ cloudSun } alt="cloud in front of sun" />
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