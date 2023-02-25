// const square = function (x) {
//   return x * x
// }

// const square = (x) => {
//   return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

// const event = {
//   name: 'Birthday party',
//   printGuestList: function () { // arrow function would not work here
//     console.log('Guest list for ' + this.name) // arrow functions don't work with "this"
//   }
// }

// standard functions have their own this binding
// arrow functions don't create their own "this" value,
// they use the "this" value in which they are created

const my_event = {
  name: 'Birthday party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList() {
    console.log('Guest list for ' + this.name)

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}

my_event.printGuestList()