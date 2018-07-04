const express = require('express');
const path = require('path');
const passportSetup = require('./config/passport-setup');

const authRoutes = require('./routes/auth-routes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
  res.render('home');
});


app.listen(3000, () => {
  console.log('Listening to port 3000!');
});
