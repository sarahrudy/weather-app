import './ForecastCard.css' 
import thunderstorm from '../../assets/storm.png'
import drizzle from '../../assets/drizzle.png'
import rain from '../../assets/rain.png'
import snow from '../../assets/snow.png'
import clear from '../../assets/clear.png'
import clouds from '../../assets/cloud-sun.png'
import mist from '../../assets/mist.png'
import fog from '../../assets/fog.png'
import tornado from '../../assets/tornado.png'


const ForecastCard = ({ day, weatherCondition, temperature, isF }) => {

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

 const tempF = temperature
 const tempC = Math.round((tempF - 30) /2)

  return (
    <section className="ForecastCard">
      <div className="day-container">
        <h3>{ day }</h3>
        <img src={ weatherMap[weatherCondition] } alt="weather image"></img>
        { (isF) ? <h4>{ temperature }°</h4> : <h4>{ tempC }°</h4> }
      </div>
    </section>
  )
}

export default ForecastCard 