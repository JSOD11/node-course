const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 500)
  })
}

// promise chaining

add(5, 7).then((sum) => {
  console.log(sum)
  return add(sum, 8) // you can return a promise
}).then((sum2) => { // then chain it like this
  console.log(sum2)
}).catch((e) => {
  console.log(e)
})


// normal way

// add(5, 7).then((sum) => {
//   console.log(sum)

//   add(sum, 8).then((sum2) => {
//     console.log(sum2)
//   }).catch((e) => {
//     console.log(e)
//   })
// }).catch((e) => {
//   console.log(e)
// })

// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([1, 3, 5])
//     reject('Things went wrong!')
//   }, 500)
// })

// doWorkPromise.then((result) => {
//   console.log('Success!', result)
// }).catch((error) => {
//   console.log('Error!', error)
// })