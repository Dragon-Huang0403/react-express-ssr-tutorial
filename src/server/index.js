import express from 'express';
import React from 'react';
import App from '../common/App';
import { renderToString } from 'react-dom/server';

const PORT = 3001;
const server = express();

server.get('/', (req, res) => {
  const html = renderToString(<App />);
  return res.send(html);
});

server.use(express.static('build'));
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
