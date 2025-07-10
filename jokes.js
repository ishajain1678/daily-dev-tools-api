const express = require('express');
const router = express.Router();

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "There are only 10 types of people: those who understand binary and those who don’t."
];

router.get('/random', (req, res) => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke });
});

module.exports = router;