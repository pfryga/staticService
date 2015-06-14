'use strict';

import express from 'express';
import statusController from './statusController';
import staticController from './staticController';

const router = express.Router();

router.use('/status', statusController);
router.use('/static', staticController);

export default router;