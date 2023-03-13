const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// CRUD: Create Read Update Delete
//       POST   GET  PATCH  DELETE

app.use(express.json()) // use json
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => { // express runs server and listens for requests
  console.log('Server is running on port ' + port)
})