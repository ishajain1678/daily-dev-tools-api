const express = require('express');
const app = express();
const PORT = 5000;

const jokesRoutes = require('./routes/jokes');
app.use('/jokes', jokesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});