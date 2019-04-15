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

router.get('/table-four', function (req, res) {
  res.render('table-four');
});

router.get('/table-one-v2', function (req, res) {
  res.render('table-one-v2');
});

router.get('/table-four-v2', function (req, res) {
  res.render('table-four-v2');
});


module.exports = router
