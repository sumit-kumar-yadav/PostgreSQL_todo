import { Router } from 'express';
const { fetchTasks } = require('../../../controllers/api/v1/home');
const router = Router();

// To practice CRUD operation using Sequilize and postgres
router.get('/', fetchTasks);

module.exports = router;