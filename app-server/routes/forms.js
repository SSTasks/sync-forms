var express = require('express');
var router = express.Router();

const formCtrl = require('../controllers/formController');

router.get('/', formCtrl.getAllForms);
router.post('/', formCtrl.addForm); // add new form
router.put('/', formCtrl.updateForm); // add new form
router.delete('/:id', formCtrl.delForm); // delete current form

module.exports = router;
