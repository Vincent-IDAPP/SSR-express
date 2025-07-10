// server/server.jsx
import express from 'express';
import fetch from 'node-fetch';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from '../src/App.jsx';

const app = express();
const PORT = 3000;

app.use('/build', express.static('build')); // statiques (si besoin)

app.get('/', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const todos = await response.json();

  const html = renderToStaticMarkup(<App todos={todos} />);
  res.send('<!DOCTYPE html>' + html);
});

app.listen(PORT, () => {
  console.log(`✅ SSR server running at http://localhost:${PORT}`);
});
