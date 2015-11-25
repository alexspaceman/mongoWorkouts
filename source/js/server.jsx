// GLOBALS
const express = require('express')

const app = express()

const router = express.Router()
const buildRouter = express.Router()
const apiRouter = express.Router()

const port = process.env.PORT || 80


// MIDDLEWARE
router.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})


// ROUTES
// index
router.get('/', (req, res) => {
  res.sendFile('html/index.html', { root: __dirname }, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded index')
    }
  })
})

// build files
buildRouter.get('/main.build.js', (req, res) => {
  res.sendFile('/main.build.js', { root: __dirname }, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded main script')
    }
  })
})

buildRouter.get('/styles.build.css', (req, res) => {
  res.sendFile('/styles.build.css', { root: __dirname }, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded stylesheet')
    }
  })
})

// api
apiRouter.get('/', (req, res) => {
  res.send(`api page`)
})


// USER ROUTER
app.use('/', router)
app.use('/build', buildRouter)
app.use('/api', apiRouter)


// START THE SERVER
app.listen(port)
console.log(`listening on port ${port}`)