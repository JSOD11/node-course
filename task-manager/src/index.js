const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

// CRUD: Create Read Update Delete
//       POST   GET  PUT    DELETE

app.use(express.json()) // use json


// POST / Create

app.post('/users', (req, res) => { // POST == Create
  const user = new User(req.body)

  user.save().then(() => {
    res.status(201) // 200s status code is good, 201 == created
    res.send(user)
  }).catch((e) => {
    res.status(400).send(e) // 400s is client error, 500s server error
  })
})

app.post('/tasks', (req, res) => { // POST == Create
  const task = new Task(req.body)

  task.save().then(() => {
    res.status(200).send(task) // 200s status code is good, 201 == created
  }).catch((e) => {
    res.status(400).send(e) // 400s is client error, 500s server error
  })
})

//
// GET / Read
//

// users

app.get('/users', (req, res) => { // GET == read
  User.find().then((users) => {
    res.send(users)
  }).catch((e) => {
    res.status(500).send(e)
  })
})

app.get('/users/:id', (req, res) => { // GET == read
  User.findById(req.params.id).then((user) => {
    if (!user) {
      return res.status(400).send()
    }
    res.send(user)
  }).catch((e) => {
    res.status(500).send(e)
  })
})

// tasks

app.get('/tasks', (req, res) => { // GET == read
  Task.find().then((tasks) => {
    res.send(tasks)
  }).catch((e) => {
    res.status(500).send(e)
  })
})

app.get('/tasks/:id', (req, res) => { // GET == read
  Task.findById(req.params.id).then((task) => {
    if (!task) {
      return res.status(400).send()
    }
    res.send(task)
  }).catch((e) => {
    res.status(500).send(e)
  })
})

app.listen(port, () => { // express runs server and listens for requests
  console.log('Server is running on port ' + port)
})