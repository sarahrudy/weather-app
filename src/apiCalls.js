export const getData = (id) => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=7b939d7f115eb5ec22876af777e193e9&units=imperial`)
    .then(response => response.json())
    .then(data => console.log(data))
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