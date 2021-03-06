var express = require('express');
var router = express.Router();
var projectsCtrl = require('../controllers/projects');
const isLoggedIn = require('../config/auth');

router.get('/', projectsCtrl.index);
router.get('/new', projectsCtrl.new);
router.get('/:id', projectsCtrl.show);
router.post('/', projectsCtrl.create);

module.exports = router;