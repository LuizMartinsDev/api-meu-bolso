const route = require('express').Router();
const financialRecord = require('../controller/financial_record.controller')

route.post('/', financialRecord.create);
route.get('/', financialRecord.findAll)

module.exports = route