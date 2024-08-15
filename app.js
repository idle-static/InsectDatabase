const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = 3000;
global.DEBUG = true;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(methodOverride('_method'));

app.get('/test', (req, res) => {
    res.send('Test working');
});

// Initialize the routes
const mothsRoute = require('./routes/moths');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Add the moth route
app.use(mothsRoute.router);

// Start server
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Simple app running on port: ${PORT}.`);
    };
});


