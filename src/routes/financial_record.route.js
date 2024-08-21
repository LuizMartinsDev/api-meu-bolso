const route = require('express').Router();
const financialRecord = require('../controller/financial_record.controller')

route.post('/', financialRecord.create);
route.get('/', financialRecord.findAll);
route.get('/:id', financialRecord.findById);
route.patch('/:id', financialRecord.update)

module.exports = route