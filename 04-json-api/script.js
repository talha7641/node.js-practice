const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/api') {
        const users = [
            { id: 1, name: 'Talha', role: 'Student' },
            { id: 2, name: 'Ali', role: 'Developer' },
            { id: 3, name: 'Sara', role: 'Designer' }
        ];

        res.writeHead(200);
        res.end(JSON.stringify(users, null, 2));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
    }
});

server.listen(3000, () => {
    console.log('http://localhost:3000/api');
});
