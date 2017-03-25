var express = require('express');
var Events = require('../db/connection.js');
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
    var results = Events.find({}, function(error, events){
        res.send(events);
    });
});


router.get('/api/events/:id', function(req, res, next) {

  res.send(req.params.id);
});
module.exports = router;
