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

router.get('/table-five', function (req, res) {
  res.render('table-five');
});

router.get('/table-six', function (req, res) {
  res.render('table-six');
});

router.get('/table-seven', function (req, res) {
  res.render('table-seven');
});


module.exports = router
