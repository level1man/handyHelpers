const express = require('express');

const app = express();
const port = 3000;
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const axios = require('axios');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
