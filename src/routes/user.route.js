const route = require('express').Router();
const soma = require('../controller/user.controller')

route.get('/', soma.soma)

module.exports = route