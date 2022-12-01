const express = require('express');
const router =  express.Router()
const Controller = require('../controllers/controller');

router.get('/', Controller.home)
router.get('/reports', Controller.reports)

module.exports = router