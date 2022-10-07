const express = require('express')
let router = express.Router()

const { ControllerAdmin } = require('../../controllers/Admin')

let admin = new ControllerAdmin(req.method);
router.get('/', admin.index(req, res));

module.exports = router;