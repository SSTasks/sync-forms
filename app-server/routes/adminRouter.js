const express = require('express');
const router = express.Router();

const controller = require("../controllers/adminController");

router.get('/users', controller.getUsers);
router.get('/groups', controller.getGroups);
router.get('/user/:name', controller.getUser);
router.get('/group/:name', controller.getGroup);
router.post('/users', controller.registerUser);
router.post('/groups', controller.addGroup);
router.delete('/user/:id', controller.removeUser);
router.delete('/group/:id', controller.removeGroup);
router.put('/user', controller.updateUser);
router.put('/group', controller.updateGroup);

module.exports = router;