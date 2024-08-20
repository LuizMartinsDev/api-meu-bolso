const Record = require('../models/Record');

const createRecord = (body) => Record.create(body);
const findAllRecord = () => Record.find();

module.exports = {
    createRecord,
    findAllRecord
}