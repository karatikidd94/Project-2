var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');

router.post('/projects/:id/comments', commentsCtrl.create);

module.exports = router;