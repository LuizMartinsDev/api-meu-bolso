const Record = require('../models/Record');

const createRecord = (body) => Record.create(body);
const findAllRecord = () => Record.find();
const findById = (id) => Record.findById(id);
const update = (
    id, 
    description,
    registration_date,
    type,
    registration_value,
    registration_status) => Record.findByIdAndUpdate({_id: id}, { description, registration_date, type, registration_value, registration_status})

module.exports = {
    createRecord,
    findAllRecord,
    findById,
    update
}