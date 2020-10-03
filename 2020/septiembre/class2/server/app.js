const http = require('http');
const express = require('express');
const mongojs = require('mongojs');

const app = express();
const db = mongojs('mongodb://127.0.0.1/todos');

const server = http.createServer(app);


app.get('/', (req, res) => {
  db.todos.find((err, docs) => {
    if (err) {
      return res.status(500).end(err.toString())
    }
    res.json(docs);
  });
});


app.post('/save', (req, res) => {
  db.todos.insert(req.query, (err, doc) => {
    if (err) {
      return res.status(500).end(err.toString())
    }
    res.json(doc);
  });
});


server.listen(8080, () => {
  console.info('listen on *:8080');
});
