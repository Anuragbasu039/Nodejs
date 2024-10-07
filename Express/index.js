const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("hello Abdul")
})
app.get("/about", (req, res) => {
    res.send("this is my about page")
})

app.listen(3000, () => console.log("server is started")
);