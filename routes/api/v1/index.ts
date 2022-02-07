import { Router } from 'express';
const { 
    fetchTasks, 
    fetchCategories,
    createTask,
    createCategory,
    updateTask
} = require('../../../controllers/api/v1/home');

const router = Router();

// To practice CRUD operation using Sequilize and postgres
router.get('/', fetchTasks);
router.get('/category', fetchCategories);
router.post('/create-task', createTask);
router.post('/create-category', createCategory);
router.put('/update-task/:id', updateTask);
// router.delete('/delete-task/:id', updateTask);

module.exports = router;