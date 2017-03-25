var express = require('express');
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
  res.send('<h1>This will be a list</h1>' +
      '<ul>' +
          '<li>List item 1</li>' +
          '<li>List item 1</li>' +
      '</ul>');
});


router.get('/api/events/:id', function(req, res, next) {

  res.send(req.params.id);
});
module.exports = router;
