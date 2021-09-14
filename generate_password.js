function generatePassword (){

//define things user might want 
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseLetters = lowercaseLetters.toUpperCase()
const numbers = '0123456789'
const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

//define dummy data 
const options = {
  length: '9',
  lowercase: 'on',
  uppercase: 'on',
  numbers: 'on',
  symbols: 'on',
  excludeCharacters: 'a1@'
}

//create a collection for user to select 

let collection = []

if (options.lowercase === 'on') {
  collection = collection.concat(lowercaseLetters.split(''))
}

if (options.uppercase === 'on'){
  collection = collection.concat (uppercaseLetters.split(''))
}

if (options.numbers === 'on') {
  collection = collection.concat (numbers.split(''))
}

if (options.symbols === 'on') {
  collection = collection.concat (symbols.split (''))
}


//remove things user do not need 
collection = collection.filter ((character) => {
  return !options.excludeCharacters.includes (character)
})

//generate password 
let password = ''
for (let i = 1 ; i <= Number(options.length) ; i++){
  let pickedIndex = Math.floor (Math.random()*collection.length)
  let chosenLetter = collection [pickedIndex] 
  password += chosenLetter 
}

return password 
}

module.exports = generatePassword