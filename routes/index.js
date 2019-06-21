var express = require('express');
var router = express.Router();
var path = require(path);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/projects', function(req, res, next) {
  res.download('./file_storage/resume.pdf', 'resume.pdf');
});

router.get('/download/resume', function(req, res, next) {
  res.render('projects');
});

router.get('/tankwar', function(req, res, next) {
  res.redirect('https://arctdav.github.io/');
});



module.exports = router;
