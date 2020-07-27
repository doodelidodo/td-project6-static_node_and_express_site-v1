const express = require('express');
const router = express.Router();
const { data } = require('../data/Data.json');
const { about } = data;

router.get('/about', (req, res) => {
    res.render('about', {about});
});

module.exports = router;