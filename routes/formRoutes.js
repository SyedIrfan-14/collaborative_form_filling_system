const express = require('express');
const {
  renderCreateForm,
  createForm,
  renderForm
} = require('../controllers/formController');

const router = express.Router();

router.get('/admin/create', renderCreateForm);
router.post('/admin/create', createForm);
router.get('/form/:id', renderForm);

module.exports = router;
