import { Router } from 'express';

const router = Router();

// To practice axios 
router.use('/v1', require('./v1'));

module.exports = router;