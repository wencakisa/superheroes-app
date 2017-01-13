let express = require('express')
let exphbs = require('express-handlebars')
let bodyParser = require('body-parser')

let app = express()
let port = 7000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: false }))

let superheroes = [
  {
    name: 'Batman',
    id: 1
  },
  {
    name: 'Batgirl',
    id: 2
  },
  {
    name: 'Dr. Strange',
    id: 3
  }
]

app.get('/', (req, res) => {
  res.redirect('/superheroes')
})

let superheroesRouter = express.Router()

superheroesRouter
  .get('/', (req, res) => {
    res.render('superheroes-list', {
      result: superheroes
    })
  })
  .get('/create', (req, res) => {
    res.render('superhero-create')
  })
  .post('/', (req, res) => {
    let superhero = req.body
    superhero.id = superheroes.length + 1

    superheroes.push(superhero)

    res.redirect('/')
  })
  .get('/:id', (req, res) => {
    let id = +req.params.id
    let superhero = superheroes.find(sh => sh.id === id)

    res.render('superhero-detail', {
      result: superhero
    })
  })

app.use('/superheroes', superheroesRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}.`)
})
