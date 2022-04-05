var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('99786', function(req, res, next) {
    res.render('99786', { title: 'Express' });
});

router.get('/98687', function(req, res, next) {
    res.render('98687', { title: 'Express' });
});

router.get('/99878', function(req, res, next) {
    res.render('99878', { title: 'Express' });
});

router.get('/99556', function(req, res, next) {
    res.render('99556', { title: 'Express' });
});

module.exports = router;
