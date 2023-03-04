const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(__filename)

const app = express()

// setup paths for express
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('views', viewsPath)
app.set('view engine', 'hbs') // setup handlebars
hbs.registerPartials(partialsPath)

// setup static directory
app.use(express.static(publicDirPath)) // index.html is a special name equivalent to ''

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather app',
    name: 'JSOD'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'JSOD'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    message: 'Pls help me',
    name: 'JSOD'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'sunny',
    location: 'Hawaii'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Error 404: Page Not Found',
    message: 'Help page not found',
    name: 'JSOD'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Error 404: Page Not Found',
    message: 'The page you are looking for does not exist',
    name: 'JSOD'
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})