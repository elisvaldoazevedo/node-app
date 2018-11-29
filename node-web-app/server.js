'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Imprime texto na pagina
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

// Expoe um JSON  no end point /hello
app.get("/hello", (req, res) => {
  res.json({ message: 'world' });
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
