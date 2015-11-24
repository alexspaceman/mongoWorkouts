// GLOBALS
const express = require('express')

const app = express()

const router = express.Router()
const scriptRouter = express.Router()
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

// scripts
scriptRouter.get('/main.build.js', (req, res) => {
  res.sendFile('build/js/main.build.js', { root: __dirname }, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded main script')
    }
  })
})

// api
apiRouter.get('/', (req, res) => {
  res.send(`api page`)
})


// USER ROUTER
app.use('/', router)
app.use('/scripts', scriptRouter)
app.use('/api', apiRouter)


// START THE SERVER
app.listen(port)
console.log(`listening on port ${port}`)