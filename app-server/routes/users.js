var express = require('express');
var router = express.Router();

var teamCtrl = require('../controllers/teamCtrl');

/* GET users listing. */
router.get('/team', teamCtrl.getTeam); // get all the team players

module.exports = router;
