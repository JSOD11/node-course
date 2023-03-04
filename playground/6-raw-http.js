const http = require('http')
lat = 40
lon = -75
url = 'http://api.weatherstack.com/current?access_key=5968bda059da98a9b3591720d7241cff&query=' + lat + ',' + lon + '&units=f'

const request = http.request(url, (response) => {

  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('Error occured', error)
})

request.end()