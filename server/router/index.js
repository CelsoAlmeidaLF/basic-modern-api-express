const express = require('express')
let router = express.Router()
let admin = require('./Admin')
let autentication = require('./Autentication')

router.use('/admin', admin);
router.get('/', (req, res) => res.send('index') );

module.exports = router;