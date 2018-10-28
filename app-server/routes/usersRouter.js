const express = require('express');
const router = express.Router();
const passport = require('passport');

const teamCtrl = require('../controllers/teamCtrl');
const usersController = require("../controllers/usersController");
const checkAuth = require('../middlewares/checkAuthorization');

/* GET users listing. */
router.get('/team', teamCtrl.getTeam); // get all the team players

router.post('/auth', passport.authenticate('local'), usersController.loginUser);
router.get('/logout', usersController.logoutUser);
router.post('/registration', usersController.registerUser);

// only for test
router.get('/', checkAuth, (req, res) => {
    res.send('Got it!');
});

module.exports = router;
