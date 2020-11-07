const http = require('http');
const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');

const app = express();
const db = mongojs('mongodb://127.0.0.1/todos');

const server = http.createServer(app);


app.use((req, res, next) => {
  res.setHeader('Surrogate-Control', 'no-store');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range, apikey, x-access-token');
  if (req.method === 'OPTIONS') return res.sendStatus(200);

  if (req.headers && req.headers['x-forwarded-for']) {
    const parts = req.headers['x-forwarded-for'].split(',');
    req.realip = parts.shift();
  } else {
    req.realip = req.ip;
  }
  return next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/', (req, res) => {
  db.todos.find((err, docs) => {
    if (err) {
      return res.status(500).end(err.toString())
    }
    res.json(docs);
  });
});


app.post('/save', (req, res) => {
  db.todos.insert({
    ...req.body,
    added: new Date(),
  }, (err, doc) => {
    if (err) {
      return res.status(500).end(err.toString())
    }
    res.json(doc);
  });
});


app.post('/toggle', (req, res) => {
  db.todos.update({
    _id: db.ObjectId(req.body._id)
  }, {
    $set: { completed: req.body.completed }
  }, (err, doc) => {
    if (err) {
      return res.status(500).end(err.toString())
    }
    res.json(doc);
  });
});

app.post('/remove', (req, res) => {
  db.todos.remove({
    _id: db.ObjectId(req.body._id)
  }, (err, doc) => {
    if (err) {
      return res.status(500).end(err.toString())
    }
    res.json(doc);
  });
});

app.post('/users/login', (req, res) => {
  db.users.findOne({
    email: req.body.email,
    password: req.body.password,
  }, (err, doc) => {
    if (err) {
      return res.status(500).end(err.toString())
    }
    if (!doc) {
      return res.status(500).end('invalid username or password');
    }
    res.json(doc);
  });
});

app.post('/users/save', async (req, res) => {
  db.users.insert({
    ...req.body,
    added: new Date(),
  }, (err, doc) => {
    if (err) return res.status(500).end(err.toString());
    res.json(doc);
  });
});


app.get('/users/all', async (req, res) => {
  db.users.find({}, (err, docs) => {
    if (err) return res.status(500).end(err.toString());
    res.json({ docs });
  });
});

app.delete('/users/remove', async (req, res) => {
  db.users.remove({
    _id: db.ObjectId(req.body._id),
  }, (err, docs) => {
    if (err) return res.status(500).end(err.toString());
    res.json({ docs });
  });
});


server.listen(8080, () => {
  console.info('listen on *:8080');
});
