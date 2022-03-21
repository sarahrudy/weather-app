import './Forecast.css' 
import ForecastCard from '../ForecastCard/ForecastCard'

const Forecast = ({ weather }) => {

  if(!weather.daily) {
    return <h2>is loading...</h2>
  }

  const forecastCard = weather.daily.map(( forecast, index) => {

    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const d = new Date(forecast.dt * 1000)
    let day = weekday[d.getDay()].slice(0, 3)

    return (
      <div className="forecast-container" key={ index }>
        <ForecastCard 
          day={ day }
          weatherCondition={ forecast.weather[0].main }
          temperature={ Math.round(forecast.temp.day) }
        />
      </div>
    )
  })

  return (
    <div className="forecast-container">{ forecastCard }</div>
  )
}

export default Forecast 