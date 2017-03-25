var express = require('express');
var db = require('../db/connection.js');
var Event = require('../models/event.js');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/new', function(req, res, next) {
    console.log('Received: ' + req.body.title + ' at ' + req.body.description);
    // res.redirect('/');
});

router.get('/api/events', function(req, res, next) {

    Event.find({}, function(error, events){
        res.send(events);
    });
});


router.get('/api/events/:id', function(req, res, next) {

  res.send(req.params.id);
});
module.exports = router;
