const Record = require('../models/Record');

const createRecord = (body) => Record.create(body);
const findAllRecord = () => Record.find();
const findById = (id) => Record.findById(id);

module.exports = {
    createRecord,
    findAllRecord,
    findById
}