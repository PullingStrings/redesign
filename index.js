const expressLayouts    = require('express-ejs-layouts');
const express           = require('express');
const scss              = require('node-sass-middleware');
// creating an express app, which will allow us to
// configure some HTTP handlers
const app = express();

// morgan is for logging requests to the terminal
// storing morgan module into `morgan`variable to use later
const morgan = require('morgan');

// modify Express settings
// tell express to use `ejs` for templating
app.set('view engine', 'ejs');
// tell ejs to look for the templates in the `views` folder
app.set('views', `${__dirname}/views`);

// add some middleware
// tell express to use morgan
// tell morgan to us the `dev` setting
app.use(morgan('dev'));

// request handlers
app.use(scss({
        src: __dirname + '/scss', //where the scss files are
        dest: __dirname + '/public', //where css should go
        debug: true // obvious
    })
);

app.use(express.static(`${__dirname}/public`));

app.use(expressLayouts);





app.get('/', (req, res) => {
  return res.render('index', { heading: 'This is the Homepage' });
});

app.get('/about', (req, res) => {
  return res.render('about');
});
app.get('/artists', (req, res) => {
  return res.render('artists');
});
app.get('/gallery', (req, res) => {
  return res.render('gallery');
});
app.get('/workshops', (req, res) => {
  return res.render('workshops');
});
app.get('/performances', (req, res) => {
  return res.render('performances');
});
app.get('/docuvideo', (req, res) => {
  return res.render('docuvideo');
});

app.get('/*', (req, res) => {
  return res.status(404).send('Not found');
});

// Start it up!
app.listen(3000, () => console.log('Express is up and running'));
