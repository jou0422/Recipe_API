var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
    console.log(req.body);
    // res.redirect('http://localhost:4200/home');
    res.send('login success');
});

module.exports = router;