const http = require('http');
const myServer = http.createServer((req, res) => {
    console.log("New req recived");
    res.end("Hello from server");

})
myServer.listen(3000, () => console.log("Server started")
);