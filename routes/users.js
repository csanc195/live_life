var express = require('express');
var router = express.Router();
var User = require('../models/User.js');

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  // if all fields are present
  if (req.body.email &&
      req.body.firstName &&
      req.body.lastName&&
      req.body.password &&
      req.body.confirmPassword) {

    // confirm that user typed same password twice
    if (req.body.password !== req.body.confirmPassword) {
      var err = new Error('Passwords do not match.');
      err.status = 400;
      return next(err);
    }

    //Create object using the form input
    var userData = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
    }

    //Use the User schema create method to save the document into the db
    User.create(userData, function(error, user){
      if(error){
        return next(error);
      }else{
        //requests the user id from the db and makes it the current session id
        req.session.userId = user._id;
      }
    });


  }else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

module.exports = router;
