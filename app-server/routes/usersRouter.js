const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require("../controllers/usersController");

router.post('/auth', passport.authenticate('local'), usersController.loginUser);
router.get('/logout', usersController.logoutUser);

module.exports = router;
