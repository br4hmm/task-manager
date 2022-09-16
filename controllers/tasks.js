const getAllTasks = (req, res) => {
  res.send('get all tasks');
};

const createTask = (req, res) => {
  res.send('create new task');
};

const getTask = (req, res) => {
  res.send(`get task with id = ${req.params.id}`);
};

const updateTask = (req, res) => {
  res.send(`update task with id = ${req.params.id}`);
};

const deleteTask = (req, res) => {
  res.send(`delete task with id = ${req.params.id}`);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
