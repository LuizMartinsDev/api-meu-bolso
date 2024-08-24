const mongoose = require('mongoose');
const recordService = require('../services/financial_record.service');

const validId = (req, res, next) => {
    const id = req.params.id;


    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).send({message: 'O id não é valido'})
    }

    next();
}

const validRecord = async (req, res,  next) => {
    const id = req.params.id;
    const record = await recordService.findById(id);


    if(!record){
        res.status(4000).send({message: 'O registro não existe'})
    }

    req.id = id;
    req.record = record;

    next();
}

module.exports = {validId, validRecord}