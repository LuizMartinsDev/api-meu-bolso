const express = require('express');
const userRoute = require('./src/routes/user.route');
const connectDatabase = require ('./src/database/db.js')

const port = 3000;

const app = express();

app.use(express.json());

connectDatabase();

app.use('/user', userRoute);

app.listen(port, () => console.log('Aplicação rodando'))