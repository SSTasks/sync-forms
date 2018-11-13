const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require("../controllers/usersController");
const checkAuth = require('../middlewares/checkAuthorization');

router.post('/auth', passport.authenticate('local'), usersController.loginUser);
router.get('/logout', usersController.logoutUser);
router.post('/registration', usersController.registerUser);

// only for test
router.get('/', checkAuth, (req, res) => {
    res.send('Got it!');
});

//admin panel routes
router.get('/users', checkAuth, usersController.getUsers);
router.get('/groups', checkAuth, usersController.getGroups);
router.post('/adduser', checkAuth, usersController.registerUser);
router.post('/addgroup', checkAuth, usersController.addGroup);
router.post('/removeuser', checkAuth, usersController.removeUser);
router.post('/removegroup', checkAuth, usersController.removeGroup);

module.exports = router;
