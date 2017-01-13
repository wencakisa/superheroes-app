let express = require('express')
let bodyParser = require('body-parser')
let morgan = require('morgan')
let exphbs = require('express-handlebars')
let mongoose = require('mongoose')

let app = express()

let port = 7000
let connectionString = 'mongodb://localhost:27017/superheroes'
let Superhero = require('./models/superhero-model')

mongoose.connect(connectionString)

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))
app.use('/static', express.static('./public'))

app.get('/', (req, res) => {
  res.redirect('/superheroes')
})

let superheroesRouter = express.Router()

superheroesRouter
  .get('/', (req, res) => {
    Superhero
      .find({})
      .then(superheroes => {
        res.render('superheroes-list', {
          result: superheroes
        })
      })
  })
  .get('/create', (req, res) => {
    res.render('superhero-create')
  })
  .post('/', (req, res) => {
    Superhero
      .create(req.body)
      .then(superhero => {
        res.redirect('/')
      })
  })
  .get('/:id', (req, res) => {
    Superhero
      .findById(req.params.id)
      .then(superhero => {
        res.render('superhero-detail', {
          result: superhero
        })
      })
  })

app.use('/superheroes', superheroesRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}.`)
})
