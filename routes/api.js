/**
 * Created by CarlosSanchez on 3/25/17.
 */
var express = require('express');
var db = require('../db/connection.js');
var Event = require('../models/event.js');


var router = express.Router();

/* GET home page. */
router.post('/events/new', function(req, res, next) {

    var newEvent = new Event(
        {
            name: req.body.name,
            description: req.body.description,
            zip: req.body.zip,
            upVote: 0,
            downVote: 0,
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

router.get('/events/:zip', function(req, res, next) {
    Event.find({'zip' : req.params.zip}, function(error, events){
        res.send(events);
    });
});

router.get('/events/:id', function(req, res, next) {

    Event.find({'_id' : req.params.id}, function(error, events){
        if(!events){
            events = {
                message: "Event not found"
            }
        }
        res.send(events);
    });
});

router.post('/events/upvote', function(req, res, next) {
    console.log("The id entered was: " + req.params.id);

    Event.findOne({'_id' : req.body.id}, function(error, thisEvent){
        if(!thisEvent){
            console.log("No events found with this id.");
            return res.send({error: "No event found with matching id!"});
        } else {
            thisEvent.upVote +=1;
            thisEvent.save(function(error, resp){
                if(error){
                    return next(error);
                }else{
                    return res.send("Event created!")
                }
            });
        }
    });
});

router.post('/events/downvote', function(req, res, next) {
    console.log("The id entered was: " + req.params.id);

    Event.findOne({'_id' : req.body.id}, function(error, thisEvent){
        if(!thisEvent){
            console.log("No events found with this id.");
            return res.send({error: "No event found with matching id!"});
        } else {
            thisEvent.downVote +=1;
            thisEvent.save(function(error, resp){
                if(error){
                    return next(error);
                }else{
                    return res.send("Event created!")
                }
            });
        }
    });
});

module.exports = router;
