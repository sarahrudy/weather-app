import './ForecastCard.css' 
import cloudDrizzleSun from '../../assets/cloud-drizzle-sun.png'
import blackCircle from '../../assets/black-circle.png'

// get APIcall working first, then come back to this 

const ForecastCard = () => {
  return (
    <section className="ForecastCard">
      <div className="day-container">
        <h3></h3>
        <img src={ cloudDrizzleSun }></img>
        <h4>92</h4>
        <img src={ blackCircle }></img>
      </div>
    </section>
  )
}

export default ForecastCard 