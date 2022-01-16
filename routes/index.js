/**
 * Created by latika sinha
*/

const express = require('express');
const router = express.Router();

const Static = require('../controllers/StaticController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express API by Latika' });
});

router.get('/hc', Static.health);

module.exports = router;
