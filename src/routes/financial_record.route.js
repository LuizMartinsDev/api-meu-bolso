const route = require('express').Router();
const financialRecord = require('../controller/financial_record.controller')

route.post('/', financialRecord.create);
route.get('/', financialRecord.findAll);
route.get('/:id', financialRecord.findById);
route.patch('/:id', financialRecord.update);
route.delete('/:id', financialRecord.deleteRecord)

module.exports = route