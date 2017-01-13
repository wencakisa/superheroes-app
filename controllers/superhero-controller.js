module.exports = (data) => {
  return {
    getAll (req, res) {
      data
        .getAllSuperheroes()
        .then(superheroes => {
          res.render('superheroes-list', {
            result: superheroes
          })
        })
    },
    getById (req, res) {
      data
        .getSuperheroById(req.params.id)
        .then(superhero => {
          if (superhero === null) {
            return res.status(404).redirect('/')
          }

          return res.render('superhero-detail', {
            result: superhero
          })
        })
    },
    getCreateForm (req, res) {
      res.render('superhero-create')
    },
    create (req, res) {
      let body = req.body

      data
        .createSuperhero(body.name, body.powers, body.fractions)
        .then(() => {
          res.redirect('/superheroes')
        })
    }
  }
}
