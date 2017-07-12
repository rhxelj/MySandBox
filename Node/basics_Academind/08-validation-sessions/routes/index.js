var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form Validation', success: false, error: req.session.errors });
  req.session.errors = null;
});



module.exports = router;
