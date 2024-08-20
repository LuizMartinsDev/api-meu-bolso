const Record = require('../models/Record');

const createRecord = (body) => Record.create(body);

module.exports = {
    createRecord
}