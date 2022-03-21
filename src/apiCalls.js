export const getAllWeatherData = () => {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=32.783058&lon=-96.806671&exclude=minutely&appid=555ea941e4367c7fd6388885aac3c9fd&units=imperial`)
  .then(response => checkError(response))
}

export const checkError = (response) => {
  if (!response.ok) {
    throw new Error(
      "Sorry...Server Error"
    )
  } else {
    return response.json()
  }
}