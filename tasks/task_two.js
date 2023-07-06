// Access and modify object properties

const person = {
  name: 'Deborah',
  gender: 'female',
  city: 'Awka'
}
console.log(person)

// modifying with dot notation
person.name = 'Henry'

// modifying with bracket notation as the task requires so I ignored the lint
person['gender'] = 'Male'

console.log(person)
