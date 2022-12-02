const express = require('express');
const router =  express.Router()
const Controller = require('../controllers/controller');

router.get('/', Controller.home)
router.get('/reports', Controller.reports)
router.get('/reports/add', Controller.addForm)
router.post('/reports/add', Controller.createReportPost)
router.get('/reports/:id', Controller.reportDetail)
router.post('/reports/:id/edit', Controller.updateReport)
router.get('/reports/:id/delete', Controller.delete)

module.exports = router