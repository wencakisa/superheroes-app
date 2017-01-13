const express = require('express')

module.exports = (app, data) => {
  let router = express.Router()
  let controller = require('../controllers/superhero-controller')(data)

  router
    .get('/', controller.getAll)
    .get('/create', controller.getCreateForm)
    .get('/:id', controller.getById)
    .post('/', controller.create)

  app.use('/superheroes', router)
}
