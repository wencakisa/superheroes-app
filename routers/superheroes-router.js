const express = require('express')

module.exports = (app, data) => {
  let router = express.Router()
  let controller = require('../controllers/superhero-controller')(data)

  router
    .get('/', controller.getAll)
    .get('/create', controller.getCreateForm)
    .get('/:id/edit', controller.getEditForm)
    .post('/:id/edit', controller.edit)
    .get('/:id', controller.getById)
    .post('/', controller.create)
    .delete('/:id', controller.remove)

  app.use('/superheroes', router)
}
