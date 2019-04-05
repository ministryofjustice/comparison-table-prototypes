const express = require('express')
const router = express.Router()

router.get('/table-one', function (req, res) {
  res.render('table-one');
});

router.get('/table-two', function (req, res) {
  res.render('table-two');
});

router.get('/table-three', function (req, res) {
  res.render('table-three');
});


module.exports = router
