const express = require('express');

const app = express();
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const aboutRoute = require('./routes/about.js');
app.use(mainRoutes);
app.use(aboutRoute);

app.use((req, res, next) => {
    const err = new Error('not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
});

app.listen(3000, () => {
    console.log('The application is running on localhost: 3000');
});