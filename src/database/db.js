const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = () => {
    mongoose.connect(`mongodb+srv://luizkwdev:${process.env.DB_PASSWORD}@cluster0.hi5ty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('conectou com o servidor do mongoDB Atlas'))
    .catch(err => console.log(err));
} 

module.exports = connectDatabase;