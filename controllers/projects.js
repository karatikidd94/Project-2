const Project = require('../models/project');

module.exports = {
  index,
  new: newProject,
  show,
};

function index(req, res) {
  Project.find({}, function(err, projects) {
    res.render('projects/index', {projects});
  });
}

function newProject(req, res) {
  res.render('projects/new');
}

function show(req, res) {
  Project.findById(req.params.id, function(err, project) {
          res.render('projects/show', {project});
  });
}
