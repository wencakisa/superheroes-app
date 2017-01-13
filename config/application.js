const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

let app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))
app.use('/static', express.static('./public'))

module.exports = app
