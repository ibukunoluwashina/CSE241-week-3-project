const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/task');
const { isAuthenticated } = require('../controllers/task');

router.get('/', tasksController.getAll);
router.get('/:id', tasksController.getSingle);
router.post('/', isAuthenticated, tasksController.creatTask);
router.put('/:id', isAuthenticated, tasksController.updateTask);
router.delete('/:id', isAuthenticated, tasksController.deleteTask);

module.exports = router;