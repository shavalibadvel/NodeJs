const http = require('node:http');

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(204);
        res.end();
        return;
    }

    console.log("server created for:", req.url);

    if (req.url === '/') {
        res.write("Hello world. This is home page");
    }
    else if (req.url === '/about') {
        res.write("Hello world. This is about page");
    }
    else if (req.url === '/contact') {
        res.write("Hello world. This is contact page");
    }
    else if (req.url === '/data') {
        const data = {
            name: "shavali",
            age: 22,
            hobbies: ["coding", "reading", "watching movies"],
            address: {
                city: "kadapa",
                state: "Andhra Pradesh",
                country: "India",
                pincode: 516001
            },
            isSleeping8hours: true,
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
        return; 
    }
    else {
        res.write("Hello world. This is 404 page");
    }

    res.end(); 
});

const PORT = 8035;
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});