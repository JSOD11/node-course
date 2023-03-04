const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

addr = process.argv[2]
if (!addr) {
  return console.log('\nPlease provide a location\n')
}

geocode(process.argv[2], (error, data) => {
  if (error) {
    return console.log(error)
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error)
    }
    console.log('\nLocation: ', data.location)
    console.log("Data: ", forecastData, '\n')
  })
})