const express = require('express');
const router = express.Router();
const interviewController = require("../controllers/interviewController");
 
router.get('/active-interviews', interviewController.sendActiveInterviews)

module.exports = router;
