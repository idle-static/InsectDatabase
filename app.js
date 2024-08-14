const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;

// Initialize the routes
const insectRouter = require('./routes/routes');

// Use express as the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use routes
app.use('/', insectRouter);

// Error handling
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// Start the server!
app.listen(port, () => {
    console.log('Server running on port 3000!');
});