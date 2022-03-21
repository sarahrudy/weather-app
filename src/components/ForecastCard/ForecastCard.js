import './ForecastCard.css' 
import thunderstorm from '../../assets/storm.png'
import drizzle from '../../assets/drizzle.png'
import rain from '../../assets/rain.png'
import snow from '../../assets/snow.png'
import clear from '../../assets/clear.png'
import clouds from '../../assets/cloud-sun.png'


const ForecastCard = ({ day, weatherCondition, temperature }) => {

  const weatherMap = {
    "Thunderstorm": thunderstorm,
    "Drizzle": drizzle,
    "Rain": rain,
    "Snow": snow,
    "Clear": clear,
    "Clouds": clouds 
  }

  return (
    <section className="ForecastCard">
      <div className="day-container">
        <h3>{ day }</h3>
        <img src={ weatherMap[weatherCondition] } alt="weather image"></img>
        <h4>{ temperature }°</h4>
      </div>
    </section>
  )
}

export default ForecastCard 