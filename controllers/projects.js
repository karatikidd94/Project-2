const Project = require('../models/project');

module.exports = {
  index,
  new: newProject,
};

function index(req, res) {
  Project.find({}, function(err, projects) {
    res.render('projects/index', projects);
  });
}

function newProject(req, res) {
  res.render('projects/new');
}
