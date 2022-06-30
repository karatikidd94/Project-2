const Project = require('../models/project');
const User = require('../models/user');

module.exports = {
  index,
  new: newProject,
  show,
  create
};

function index(req, res) {
  User.find({}, function(err, user) {
    console.log('user:' , user)
  });
  Project.find({}, function(err, projects) {
    res.render('projects/index', {projects});
  });
}

function newProject(req, res) {
  res.render('projects/new');
}

function show(req, res) {
  Project.findById(req.params.id, function(err, project) {
    console.log('Show Project:', project);
          res.render('projects/show', {project});
  });
}

function create(req, res) {
  const project = new Project(req.body);
  project.save(function(err) {
      // if we don't redirect, the new page will be shown
      // with /movies in the address bar
      if (err) return res.redirect('/projects/new');
      console.log(project);
      // for now, redirect right back to new.ejs
      res.redirect('/projects');
  });
}
