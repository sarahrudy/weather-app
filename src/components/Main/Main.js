import './Main.css'
import blueCircle from '../../assets/blue-circle.png'
import cityImage from '../../assets/city-image.png'
import cloudOne from '../../assets/cloud-one.png'
import cloudTwo from '../../assets/cloud-two.png'
import blueOval from '../../assets/blue-oval.png'
import toggle from '../../assets/toggle.png'

const Main = () => {
  return (
    <div className="Main">
      <section className="temp">
        <h3>93</h3>
        <img src={ blueCircle }></img>
        <h4>Partly Cloudy</h4>
        <h5>12 mph</h5>
      </section>
      <section className="celsius-fahrenheit">
        <img className="blue-oval" src={ blueOval }></img>
        <img className ="toggle" src={ toggle }></img>
      </section>
      <section className="clouds-and-city">
        <img className="cloud-one" src={ cloudOne } alt="cloud"></img>
        <img className="city-image" src={ cityImage } alt="city skyline"></img>
        <img className="cloud-two" src={ cloudTwo } alt="cloud"></img>
      </section>
    </div>
  );
}

export default Main;