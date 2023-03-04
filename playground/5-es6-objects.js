// object property shorthand

const username = 'Andrew'
const userAge = 27

const user = {
  username,
  age: userAge,
  location: 'Philadelphia'
}

console.log('\n', user, '\n')


// object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

// // const label = product.label
// // const stock = product.stock

// const {label: productLabel = 'abc', stock = 0, rating = 5} = product
// console.log(productLabel, stock, rating, '\n')

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock, '\n')
}

transaction('order', product)