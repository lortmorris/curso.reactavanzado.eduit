const http = require('http');
const express = require('express');
const mongojs = require('mongojs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const db = mongojs('mongodb://localhost/todoslist');
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/todoslist/:id', (req, res, next) => {
  const query = {};
  if (req.params.id && req.params.id !== '0') {
    query._id = db.ObjectId(req.params.id);
  }

  db.todoslist.find(query, {}, (err, docs) => {
    if (err) return res.json({ err: err.toString() });
    return res.json({ docs });
  });
});

app.put('/todoslist', (req, res, next) => {
  const data = req.body;
  db.todoslist.insert({ ...data, added: new Date(), todos: [] }, (err, doc) => {
    if (err) return res.json({ err: err.toString() });
    return res.json(doc);
  });
});

app.delete('/todoslist/:id', (req, res, next) => {
  db.todoslist.remove({ _id: db.ObjectId(req.params.id) }, (err, docs) => {
    if (err) {
      return res.json({ error: true, err: err.toString() });
    }
    return res.json({ err: false, result: docs });
  })
});

server.listen(5000, () => console.info('listen on *:5000'));
