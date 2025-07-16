const express = require('express');
const router = express.Router();

let todos = [
  { id: 1, text: "Learn Express Routing", isCompleted: false }
];

let currentId = 2;

// GET all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// POST a new todo
router.post('/', (req, res) => {
  const { text } = req.body;

  const newTodo = {
    id: currentId++,
    text,
    isCompleted: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});


router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { text, isCompleted } = req.body;

  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  if (text !== undefined) todo.text = text;
  if (isCompleted !== undefined) todo.isCompleted = isCompleted;

  res.json(todo);
});


router.patch('/:id/complete', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Not found' });

  todo.isCompleted = !todo.isCompleted;
  res.json(todo);
});


router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
