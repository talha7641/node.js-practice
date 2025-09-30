const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.writeHead(200);
        res.end(`
            <h1>Welcome to the Home Page!</h1>
            <p>This is the main page of our website.</p>
            <a href="/about">Go to About</a> | <a href="/contact">Go to Contact</a>
        `);
    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end(`
            <h1>About Us</h1>
            <p>Learn more about our company.</p>
            <a href="/">Back to Home</a> | <a href="/contact">Go to Contact</a>
        `);
    } else if (req.url === '/contact') {
        res.writeHead(200);
        res.end(`
            <h1>Contact Us</h1>
            <p>Get in touch with us!</p>
            <a href="/">Back to Home</a> | <a href="/about">Go to About</a>
        `);
    } else {

        res.writeHead(404);
        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <a href="/">Back to Home</a>
        `);
    }
});


server.listen(3000, () => {
    console.log('http://localhost:3000/');
});