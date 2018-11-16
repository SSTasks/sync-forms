const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const screenshotController = require('../controllers/screenshotController');

router.post('/', bodyParser.json(), screenshotController.saveScreenshot);
router.delete('/:prev', screenshotController.removeScreenshot);


module.exports = router;

