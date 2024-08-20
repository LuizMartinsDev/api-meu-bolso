const express = require('express');
const userRoute = require('./src/routes/financial_record.route.js');
const connectDatabase = require ('./src/database/db.js')

const port = 3000;

const app = express();

app.use(express.json());

connectDatabase();

app.use('/record', userRoute);

app.listen(port, () => console.log('Aplicação rodando'))