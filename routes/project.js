const express = require('express');
const router = express.Router();
const { data } = require('../data/Data.json');
const { projects } = data;

router.get('/', (req, res) => {
    const numberOfProjects = projects.length;
    const randomProject = Math.floor(Math.random() * numberOfProjects);
    res.redirect(`/project/${randomProject}`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const project = projects[id];

    res.render('project', { project });
});

module.exports = router;