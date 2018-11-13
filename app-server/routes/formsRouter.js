const express = require('express');
const router = express.Router();
const Form = require('../schemas/formSchema');
const formController = require("../controllers/formController");
 
router.get('/', formController.getAllForms);
router.post('/', formController.addNewForm);

module.exports = router;