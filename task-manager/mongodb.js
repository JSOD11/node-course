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

  
})