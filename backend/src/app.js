const express = require("express");
const cors = require('cors');
const containers = require('./routes/containers');

const app = express();
const PORT = 3001

app.use(express.json());
app.use(cors());

// Routes
app.use('/containers', containers);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});