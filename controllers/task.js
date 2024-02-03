const ObjectId = require("mongodb").ObjectId;
const Task = require("../model/task");

const getAll = async (req, res) => {
  console.log("Get all route working");
  // #swagger.tags=['users']
  try {
    const tasks = await Task.find();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json("Internal Server Error");
  }
};

const getSingle = async (req, res) => {
  // #swagger.tags=['users']
  console.log("Get single route working");
  try {
    const taskId = new ObjectId(req.params.Id);
    console.log("Searching for task with ID:", taskId);
    const task = await Task.findOne({ _id: taskId });

    if (task) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(task);
    } else {
      console.log("task not found for ID:", taskId);
      res.status(404).json("User not found");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json("Internal Server Error");
  }
};

const creatTask = async (req, res) => {
  // #swagger.tags=['users']
  const { title, owner, status } = req.body;
  try {
    const task = await new Task({
      title,
      owner,
      createdAt: Date.now(),
    });
    await task.save();
    res.send(task);
  } catch (error) {
    console.error("Error creating/updating task:", error);
    res.status(500).json("Internal Server Error");
  }
};

const updateTask = async (req, res) => {
  // #swagger.tags=['users']
  console.log("Upadte route working");
  try {
    const taskId = new ObjectId(req.params.id);
    console.log("Update task with ID:", task);
    const task = { ...req.body };
    console.log("New task data", task);
    const response = await task.findByIdAndUpdate({ _id: taskId }, task, {
      new: true,
    });

    if (response) {
      return res.status(200).send(response);
    } else {
      console.log("User not found for update or no changes made.");
      res.status(404).json("User not found for update or no changes made.");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  // #swagger.tags=['users']
  console.log("Delete route working");
  try {
    const taskId = new ObjectId(req.params.id);
    const response = await Task.findByIdAndDelete({ _id: userId });

    if (response) {
      return res.status(200).send();
    } else {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: error.message });
    }
  } catch (errror) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: error.message });
  }
};

const isAuthenticated = (req, res, next) => {
  if (req.session.user === undefined) {
    return res.status(401).json('You donnot have access.');
  }
  // Call next to move on to the next middleware
  next();
}

module.exports = {
  getAll,
  getSingle,
  creatTask,
  updateTask,
  deleteTask,
  isAuthenticated
};
