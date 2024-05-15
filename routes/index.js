var express = require('express');
var router = express.Router();

// Define the messages array
const messages = [
  {
    text: "Hi there!",
    user: "Sam",
    added: new Date()
  },
  {
    text: "Hi there, How are you!",
    user: "Ryan",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mini Messageboard - The Odin Project',
    messages: messages
  });
});


/* GET new message form. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add a New Message' });
});

/* POST new message. */
router.post('/new', function(req, res, next) {
  const { user, text } = req.body;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect('/');
});

module.exports = router;
