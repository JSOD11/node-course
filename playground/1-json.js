const fs = require('fs')

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)

// console.log(bookJSON)
// console.log(typeof(bookJSON))
// console.log(bookJSON.slice(3, 12))

// const parsedData = JSON.parse(bookJSON)
// console.log(parse)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const book_obj = JSON.parse(dataJSON)
// console.log(book_obj)

// {"name":"Andrew","planet":"Earth","age":27}

dataBuffer = fs.readFileSync('1-json.json')
person_obj = JSON.parse(dataBuffer.toString())
person_obj.name = 'Justin'
person_obj.age = '22'
console.log(person_obj)

person_JSON = JSON.stringify(person_obj)
fs.writeFileSync('1-json.json', person_JSON)