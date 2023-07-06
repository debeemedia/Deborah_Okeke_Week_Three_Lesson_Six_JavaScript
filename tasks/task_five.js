// Merge objects

// create first object
const personalInfo = {
  name: 'Deborah',
  gender: 'female',
  city: 'Awka'
}
console.log(personalInfo)

// create second object
const loginInfo = {
  username: 'debeemedia',
  isSubscribed: false
}

// for demonstration, create a new variable and assign it to the merged objects
const candidateInfo = Object.assign(personalInfo, loginInfo)
console.log(candidateInfo) // newly created variable contains the two objects

console.log(personalInfo) // object personalInfo is now updated
