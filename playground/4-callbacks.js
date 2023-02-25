// callback function: function provided as an argument to another function
// with the intent of having it be called later on in time

// setTimeout(() => {
//   console.log('One second is up!')
// }, 1000)

// const names = ['Justin', 'Ben']
// const shortNames = names.filter((name) => name.length <= 4)

// const geocode = (address, callback) => {

//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 1
//     }

//     callback(data)
//   }, 1000)
// }

// geocode('Philadelphia', (data) => {
//   console.log(data)
// })


const add = (a, b, callback) => {
  setTimeout(() => {
    data = a + b
    callback(data)
  }, 1000)
}

add(1, 4, (data) => {
  console.log(data) // Should print: 5
})