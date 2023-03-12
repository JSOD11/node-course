// CRUD: create read update delete
// /Users/jsod/mongodb/bin/mongod --dbpath=/Users/jsod/mongodb-data

const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectID
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  const updatePromise = db.collection('users').updateOne({
    _id: ObjectId("640cf9a29725052524d4b5bb")
  }, {
    $set: {
      name: 'BNeal'
    },
    $inc: {
      age: 1
    }
  })

  updatePromise.then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })

  db.collection('users').deleteOne({
    age: 22
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })


  // db.collection('users').find({ age: 22 }).toArray((error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
  //   console.log(tasks)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Do homework',
  //     completed: false
  //   }, {
  //     description: 'Complete node course',
  //     completed: false
  //   }, {
  //     description: 'Finish midterm',
  //     completed: true
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents')
  //   }

  //   console.log(result)
  // })
})