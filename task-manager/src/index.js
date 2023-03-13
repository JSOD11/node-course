const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => { // middleware example
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next() // this is necessary to continue the chain
//   }
// })

app.use(express.json()) // use json
app.use(userRouter)
app.use(taskRouter)

// CRUD: Create Read Update Delete
//       POST   GET  PATCH  DELETE

// with middleware: new request --> do something --> run route handler

app.listen(port, () => { // express runs server and listens for requests
  console.log('Server is running on port ' + port)
})