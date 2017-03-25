/**
 * Created by CarlosSanchez on 3/25/17.
 */
var express = require('express');
var db = require('../db/connection.js');
var Event = require('../models/event.js');


var router = express.Router();

/* GET home page. */
router.post('/new', function(req, res, next) {
    console.log('Received: ' + req.body.title + ' at ' + req.body.description);
    // res.redirect('/');
});

router.get('/events', function(req, res, next) {

    Event.find({}, function(error, events){
        res.send(events);
    });
});

router.get('/events/:id', function(req, res, next) {

    res.send(req.params.id);
});
module.exports = router;
