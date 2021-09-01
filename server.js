const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const urlPrefix = process.argv[2] ? process.argv[2] : '/action-logger/api/';
const port = process.argv[3] ? process.argv[3] : 5555;

server.use(middlewares);
server.use(urlPrefix, router);
server.listen(port, () => {
  console.log(`JSON Server is running with context = ${urlPrefix}, port = ${port}`);
  console.log(`You can specify custom context and port passing 1 and 2 arg. E.g: npm run json-server /custom-context 1234`);
});
