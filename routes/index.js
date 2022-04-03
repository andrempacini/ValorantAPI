var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'vava', list:[[1,2,"andre"],[3,4,"xapadss"]] });
});
router.get('/val', function(req, res, next) {
  res.render('index', { title: 'VALORANT', list:["batata", "carne", "abobrinha"] });
});

module.exports = router;
