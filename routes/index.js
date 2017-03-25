var express = require('express');
var db = require('../db/connection.js');
//var Event = require('../models/event.js');

var users = require('./users');
var api = require('./api');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api', api);
router.use('/users', users);

module.exports = router;
