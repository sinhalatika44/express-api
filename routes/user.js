/**
 * Created by latika sinha
*/

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    error: false,
    code: 200,
    message: 'Hello from user'
  });
});

module.exports = router;
