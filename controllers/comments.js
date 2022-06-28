const Project = require('../models/project');

module.exports = {
  create
};

function create(req, res) {
    console.log('create comment');
    Project.findById(req.params.id, function(err, project) {
        // Add the user-centric info to req.body (the new review)
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        // We can push subdocs into Mongoose arrays
        console.log(req.body)
        project.comment.push(req.body)
        // save any changes to the parent doc
        project.save(function(err) {
            console.log(err);
            // respond to the request in this case, we'll redirect
            res.redirect(`/projects/${project._id}`)
        })
    })
}