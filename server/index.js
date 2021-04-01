const express = require('express');
const db = require('../database');

const app = express();
const port = 3000;
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const axios = require('axios');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/jobs', (req, res) => {
  const { userId } = req.params;
  db.getJobs()
    .then((results) => (res.send(results.rows)))
    .catch(() => res.sendStatus(500));
});

app.post('/jobs', (req, res) => {
  const { posterid, jobdescription } = req.body;
  db.postJob(posterid, jobdescription)
    .then(() => res.send(201))
    .catch(() => res.sendStatus(500));
});


app.put('/jobs', (req, res) => {
  const { id:fullfillerid} = req.body.user;
  const { id } = req.body.job;
  console.log(fullfillerid, id);
  db.putPending(fullfillerid, id)
    .then(() => res.send(201))
    .catch(() => res.sendStatus(500));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
