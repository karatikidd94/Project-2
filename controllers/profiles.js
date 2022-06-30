const Project = require('../models/project');
const User = require('../models/user');

module.exports = {
  index,
};

function index(req, res) {
  User.findById(req.user.id, function(err, user) {
    res.render('profiles/index', {user});
  });
}

