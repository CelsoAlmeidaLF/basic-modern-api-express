import express from 'express';
import ControllerHome from '../controllers/home.js';

let router = express.Router();
let home = new ControllerHome();

router.get('/', home.index);

export default router;