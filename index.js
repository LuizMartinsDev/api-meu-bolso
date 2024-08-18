const express = require('express');
const userRoute = require('./src/routes/user.route')
const port = 3000;

const app = express();

app.use('/user', userRoute);

app.listen(port)