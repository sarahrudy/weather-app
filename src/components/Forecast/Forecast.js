import './Forecast.css' 
import cloudDrizzleSun from '../../assets/cloud-drizzle-sun.png'
import ForecastCard from '../ForecastCard/ForecastCard'

const Forecast = ({ weather }) => {

  if(!weather.daily) {
    return <h2>is loading...</h2>
  }

  // const forecastCard = forecast.daily.map(( forecast, i) => {
    return (
     <ForecastCard />
    )
  // })

  // return (
  //   <div className="forecast-container">{ forecastCard }</div>
  // )
}

export default Forecast 