import express from 'express';
import React from 'react';
import App from '../common/App';
import { renderToString } from 'react-dom/server';
import fs from 'fs';

const PORT = 3001;
const server = express();

server.get('/', (req, res) => {
  const html = renderToString(<App />);
  fs.readFile('build/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    // inject app`s static contents to the div with id equal root
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

server.use(express.static('build'));
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
