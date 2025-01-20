const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

const handleError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Trying a different port...`);
    port++;
    startServer(); 
  } else {
    console.error(`An error occurred: ${error.message}`);
  }
};

server.on('error', handleError);

startServer();