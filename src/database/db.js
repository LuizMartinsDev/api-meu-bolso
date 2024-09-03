const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('conectou com o servidor do mongoDB Atlas'))
    .catch(err => console.log(err));
} 

module.exports = connectDatabase;