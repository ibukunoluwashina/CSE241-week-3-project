const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/task');

router.get('/', tasksController.getAll);
router.get('/:id', tasksController.getSingle);
router.post('/', tasksController.creatTask);
router.put('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);

module.exports = router;