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
    const { project_name } = projects[id];
    const { description } = projects[id];
    const { technologies } = projects[id];
    const { live_link } = projects[id];
    const { github_link } = projects[id];
    const { image_urls } = projects[id];

    res.render('project', { project_name, description, technologies, live_link, github_link, image_urls });
});

module.exports = router;