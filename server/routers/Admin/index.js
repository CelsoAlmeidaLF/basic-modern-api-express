import express from 'express'
import ControllerAdmin from '../../controllers/ControllerAdmin.js'
let rAdmin = express.Router()


let admin = new ControllerAdmin();
rAdmin.get('/', admin.index);

export {rAdmin};