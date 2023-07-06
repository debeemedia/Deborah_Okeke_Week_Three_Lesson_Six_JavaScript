// Remove properties from an object

const person = {
  name: 'Deborah',
  gender: 'female',
  city: 'Awka'
}
console.log(person) // logs the complete object

console.log(typeof (person.city)) // logs the typeof key city which is string

// use "delete" keyword
delete person.city // deletes the key city
console.log(typeof (person.city)) // logs the typeof now deleted key city which becomes undefined
console.log(person) // logs the newly modified object
