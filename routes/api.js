/**
 * Created by CarlosSanchez on 3/25/17.
 */
var express = require('express');
var db = require('../db/connection.js');
var Event = require('../models/event.js');


var router = express.Router();

/* GET home page. */
router.post('/new', function(req, res, next) {

    var newEvent = new Event(
        {
            name: req.body.name,
            description: req.body.description,
            zip: req.body.location,
            timeStamp: new Date
        }
    );
    console.log(newEvent);

    newEvent.save(function(error, resp){

        if(error){
            console.log(error.errors);
            return next(error);
        }else{
            return res.send("Event created!")
        }
    });
});

router.get('/events/:lat/:long', function(req, res, next) {
    var lat = req.params.lat;
    var long = req.params.long;


    console.log("Latitude and longitude received. lat:" + lat + ", long: " + long);
    Event.find({}, function(error, events){
        res.send(events);
    });
});

router.get('/events/:id', function(req, res, next) {

    Event.findOne({'_id' : req.params.id}, function(error, events){
        if(!events){
            events = {
                message: "Not found"
            }
        }
        res.send(events);
    });
});
module.exports = router;
