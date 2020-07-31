const express = require('express');

const app = express();
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoute = require('./routes/project.js');

app.use(mainRoutes);
app.use('/project', projectRoute);

app.use((req, res, next) => {
    const err = new Error('not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status? err.status : 500;
    res.status(err.status || 500);
    res.render('error', err);
});

app.listen(3000, () => {
    console.log('The application is running on localhost: 3000');
});