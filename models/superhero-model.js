const mongoose = require('mongoose')

let requiredValidationMessage = '{PATH} is required.'

let schema = mongoose.Schema({
  name: {
    type: String,
    required: requiredValidationMessage,
    unique: true
  },
  powers: [{}],
  fractions: [{}]
})

mongoose.model('Superhero', schema)

module.exports = mongoose.model('Superhero')
