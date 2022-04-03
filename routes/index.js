const valorant = require("../Bussines/valorant");
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/data', async function(req, res, next) {
  var l = await valorant.getLeaderboard('d929bc38-4ab6-7da4-94f0-ee84f8ac141e');
  res.send(l)
});

module.exports = router;


