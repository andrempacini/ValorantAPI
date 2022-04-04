const valorant = require("../Business/valorant");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  var l = await valorant.getActs()

  var atos = l.filter(x => x.type != "episode")
  var eps = l.filter(x => x.type == "episode")

  eps = eps.map(x => ({
    id: x.id,
    name: x.name,
    atos: l.filter(y => y.parentId == x.id)
  }))

  res.render('index', { title: 'vava', eps: eps });
});
router.get('/val/:id', async function (req, res, next) {
  var l = await valorant.getLeaderboard(req.params.id);
  //var l = await valorant.getActs()
  res.render('table', { title: 'VALORANT', list: l });
});
/* GET home page. */
router.get('/data', async function (req, res, next) {
  var l = await valorant.getLeaderboard('d929bc38-4ab6-7da4-94f0-ee84f8ac141e');
  res.send(l)
});

module.exports = router;

