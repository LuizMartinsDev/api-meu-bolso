const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }, 
    registration_date: {
        type: Date,
        required: true
    }, 
    type: {
        type: String,
        enum: ['despesa', 'receita'],
        required: true
    }, 
    registration_value: {
        type: Number, 
        required: true
    },
    registration_status: {
        type: String,
        enum: ['pendente', 'consolidado', 'cancelado'],
        required: true
    }
})

const Record = mongoose.model('financial_record', recordSchema);

module.exports = Record
