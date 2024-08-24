const route = require('express').Router();
const financialRecord = require('../controller/financial_record.controller');
const {validId, validRecord} = require('../middlewares/global.middlewares')

route.post('/', financialRecord.create);
route.get('/', financialRecord.findAll);
route.get('/:id', validId, validRecord,  financialRecord.findById);
route.patch('/:id', validId, validRecord,  financialRecord.update);
route.delete('/:id', validId, validRecord,  financialRecord.deleteRecord)

module.exports = route