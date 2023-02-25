const request = require('request')

const forecast = (lat, lon, callback) => {
  const weather_url = 'http://api.weatherstack.com/current?access_key=5968bda059da98a9b3591720d7241cff&query=' + lat + ',' + lon + '&units=f'

  request({ url: weather_url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined)
    } else if (response.body.error) {
      callback("Unable to find location.", undefined)
    } else {
      data = response.body.current
      callback(undefined, {
        description: data.weather_descriptions[0],
        temperature: data.temperature,
        feelslike: data.feelslike
      })
    }
  })
}

module.exports = forecast