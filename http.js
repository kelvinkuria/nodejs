
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to our homepage');
    }

    if (req.url === '/bout') {
        return res.end('Here is our history');
    }

    // This will only run if neither of the above match
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href='/'>Back home</a>
    `);
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
