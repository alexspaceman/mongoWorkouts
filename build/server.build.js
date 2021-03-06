'use strict';

// GLOBALS
var express = require('express');

var app = express();

var router = express.Router();
var buildRouter = express.Router();
var apiRouter = express.Router();

var port = process.env.PORT || 80;

// MIDDLEWARE
router.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

// ROUTES
// index
router.get('/', function (req, res) {
  res.sendFile('html/index.html', { root: __dirname }, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded index');
    }
  });
});

// build files
buildRouter.get('/main.build.js', function (req, res) {
  res.sendFile('/main.build.js', { root: __dirname }, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded main script');
    }
  });
});

buildRouter.get('/styles.build.css', function (req, res) {
  res.sendFile('/styles.build.css', { root: __dirname }, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded stylesheet');
    }
  });
});

// api
apiRouter.get('/', function (req, res) {
  res.send('api page');
});

// USER ROUTER
app.use('/', router);
app.use('/build', buildRouter);
app.use('/api', apiRouter);

// START THE SERVER
app.listen(port);
console.log('listening on port ' + port);