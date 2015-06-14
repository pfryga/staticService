'use strict';

import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        data: 'abc'
    });
});

export default router;