var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var labsix = require('../controllers/labsix');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/html1', labsix.index);

module.exports = router;
