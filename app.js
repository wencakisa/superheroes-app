let express = require('express')
let exphbs = require('express-handlebars')

let app = express()
let port = 7000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

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
  .post('/', (req, res) => {
    res.send('blabla')
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
