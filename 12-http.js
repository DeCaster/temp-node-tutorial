const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Welcome to our homepage");
    return
  } else if (req.url === '/about') {
    res.end("Here is our short history");
    return

  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>Something went wrong</p>
      <a href="/">back home</a>
    `);
  }
});

server.listen(4900, () => {
  console.log('Server is running on http://localhost:4900');
});
