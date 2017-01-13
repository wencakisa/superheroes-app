const fs = require('fs')
const path = require('path')

module.exports = (app, data) => {
  fs.readdirSync('./routers')
    .filter(x => x.includes('-router'))
    .forEach(file => {
      require(path.join(__dirname, file))(app, data)
    })
}
