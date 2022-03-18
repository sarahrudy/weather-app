import './Header.css';
import location from '../../assets/location.png'
import dayjs from 'dayjs'

const Header = () => {

  const today = dayjs(new Date())

  return (
    <div className="Header">
      <div className="location-and-city-state">
        <img src={location} alt='location indicator'></img>
        <h1>Dallas, TX</h1>
      </div>
      <h2 className="date">{ today.format('dddd, MMMM DD, YYYY') }</h2>
    </div>
  )
}

export default Header