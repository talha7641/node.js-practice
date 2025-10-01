const http = require('http');

const server = http.createServer((req, res) => {
    const time = new Date().toLocaleTimeString();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Current Server Time: ${time}`);
});

server.listen(3000, () => {
    console.log("http://localhost:3000");
});
