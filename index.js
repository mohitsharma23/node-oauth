const app = require('express')();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});


app.listen(3000, () => {
  console.log('Listening to port 3000!');
});
