var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/news', function(req, res, next) {
    res.render('news', { title: 'Express' });
});

router.get('/news1', function(req, res, next) {
    res.render('news1', { title: 'Express' });
});

router.get('/news2', function(req, res, next) {
    res.render('news2', { title: 'Express' });
});

router.get('/news3', function(req, res, next) {
    res.render('news3', { title: 'Express' });
});

router.get('/news4', function(req, res, next) {
    res.render('news4', { title: 'Express' });
});

router.get('/news5', function(req, res, next) {
    res.render('news5', { title: 'Express' });
});

router.get('/1', function(req, res, next) {
    res.render('1', { title: 'Express' });
});

router.get('/2', function(req, res, next) {
    res.render('2', { title: 'Express' });
});

router.get('/3', function(req, res, next) {
    res.render('3', { title: 'Express' });
});

router.get('/4', function(req, res, next) {
    res.render('4', { title: 'Express' });
});

router.get('/5', function(req, res, next) {
    res.render('5', { title: 'Express' });
});

router.get('/6', function(req, res, next) {
    res.render('6', { title: 'Express' });
});

router.get('/7', function(req, res, next) {
    res.render('7', { title: 'Express' });
});

router.get('/8', function(req, res, next) {
    res.render('8', { title: 'Express' });
});

router.get('/9', function(req, res, next) {
    res.render('9', { title: 'Express' });
});

router.get('/10', function(req, res, next) {
    res.render('10', { title: 'Express' });
});

module.exports = router;
