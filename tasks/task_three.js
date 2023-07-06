// Iterate over object properties

// create the object
const person = {
  name: 'Deborah',
  gender: 'female',
  city: 'Awka'
}
console.log(person)

// iterate with for...in
for (const detail in person) {
  console.log(`${detail}: ${person[detail]}`)
}
