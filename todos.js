const express = require('express');
const router = express.Router();

let todos = [
  { id: 1, text: "Learn Express Routing", completed: false }
];

// GET all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// POST new todo
router.post('/', (req, res) => {
  const { text } = req.body;
  const newTodo = {
    id: Date.now(),
    text,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT update todo
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  const todo = todos.find(t => t.id == id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  if (text !== undefined) todo.text = text;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});

// DELETE a todo
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id != id);
  res.json({ message: "Todo deleted" });
});

module.exports = router; // ✅ important
