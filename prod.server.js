const express = require('express')

const app = express()

const appData = require('./data.json')
const notes = require('./ITnote.json')
const works = appData.works

const router = express.Router()

router.get('/works', function (req, res) {
  res.json({
    errno: 0,
    data: works
  })
})

router.get('/notes', function (req, res) {
  res.json({
    errno: 0,
    data: notes
  })
})

app.use('/api', router)

app.use(express.static('./dist'))

const port = process.env.PORT || 8888

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
