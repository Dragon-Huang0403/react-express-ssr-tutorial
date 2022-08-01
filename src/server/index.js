import express from 'express';

const PORT = 3001;
const server = express();

server.get('/', (req, res) => {
  return res.send('Hello World!');
});

server.use(express.static('build'));
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
