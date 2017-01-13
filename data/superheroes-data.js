module.exports = (models) => {
  let Superhero = models.Superhero

  return {
    getAllSuperheroes () {
      return new Promise((resolve, reject) => {
        Superhero
          .find({})
          .then(superheroes => {
            return resolve(superheroes)
          })
          .catch(err => {
            return reject(err)
          })
      })
    },
    getSuperheroById (id) {
      return new Promise((resolve, reject) => {
        Superhero
          .findById(id)
          .then(superhero => {
            return resolve(superhero)
          })
          .catch(err => {
            return reject(err)
          })
      })
    },
    createSuperhero (name, powers, fractions) {
      return new Promise((resolve, reject) => {
        Superhero
          .create({ name, powers, fractions })
          .then(superhero => {
            return resolve(superhero)
          })
          .catch(err => {
            return reject(err)
          })
      })
    }
  }
}
