const express = require('express');
const router = express.Router();

const controller = require("../controllers/statisticsController");

router.get('/interviews', controller.getInterviews);

module.exports = router;
