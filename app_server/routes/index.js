var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var labsix = require('../controllers/labsix');

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET page one and page two. */
router.get('/pageone', labsix.index); //here is what you want the uesr to type in, not necessairily the name of the html/jade file
router.get('/pagetwo', labsix.index);
module.exports = router;
