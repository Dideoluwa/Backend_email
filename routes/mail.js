const express = require('express');
const routes = express.Router()

const {sendMail} = require('../controller/mail')

routes.post('/sendMail',sendMail)
module.exports = routes