import './Main.css'
import cityImage from '../../assets/city-image.png'
import cloudSun from '../../assets/cloud-sun.png'
import cloudOne from '../../assets/cloud-one.png'
import cloudTwo from '../../assets/cloud-two.png'

const Main = () => {
  return (
    <div className="Main">
      <div className="temp-container">
        <h3>93°</h3>
        <img src={ cloudSun } alt="cloud in front of sun" />
        <h4>Partly Cloudy</h4> 
        <h5>12 mph</h5>
      </div>
      <div className="toggle-switch">
        <input type="checkbox" name="toggleSwitch" id="toggleSwitch" value="C°"/>
        <label className="toggle-switch-label" htmlFor="toggleSwtich">C°</label>
      </div>
      <div className="clouds-and-city">
        <img className="cloud-one" src={ cloudOne } alt="cloud"></img>
        <img className="city-image" src={ cityImage } alt="city skyline"></img>
        <img className="cloud-two" src={ cloudTwo } alt="cloud"></img>
      </div>
    </div>
  );
}

export default Main;