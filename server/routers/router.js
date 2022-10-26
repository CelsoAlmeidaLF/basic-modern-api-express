import express from 'express';
import { rAdmin } from './Admin/index.js';

const router = express.Router();

router.use('/admin', rAdmin);

router.get('/', (req, res) => {
    res.json({
        mensagem:"testing ..."
    });
});

export {router}