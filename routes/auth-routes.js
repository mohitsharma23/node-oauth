const router = require('express').Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  // Passport handler
  res.send('logging out');
});

router.get('/google', (req, res) => {
  // Passport handler
  res.send('Google handles');
});


module.exports = router;
