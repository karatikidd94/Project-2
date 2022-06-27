var express = require('express');
var router = express.Router();
var projectsCtrl = require('../controllers/projects');
const isLoggedIn = require('../config/auth');

router.get('/', projectsCtrl.index);
router.get('/new', projectsCtrl.new);

module.exports = router;