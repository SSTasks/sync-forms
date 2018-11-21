const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require("../controllers/usersController");
const checkAuth = require('../middlewares/checkAuthorization');

router.post('/auth', passport.authenticate('local'), usersController.loginUser);
router.get('/logout', usersController.logoutUser);

// only for test
router.get('/', checkAuth, (req, res) => {
    res.send('Got it!');
});

module.exports = router;
