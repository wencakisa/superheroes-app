const config = require('./config')
const app = require('./config/application')
const data = require('./data')(config)

app.get('/', (req, res) => {
  res.render('home')
})

require('./routers')(app, data)

app.listen(config.port, () => { console.log(`App listening on port ${config.port}.`) })
