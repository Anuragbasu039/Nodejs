// app.js
const express = require('express');
const PORT = 3000;
const app = express();
const { logReqRes, ResReq } = require('./Middleware/index');
const userRouter = require('./routes/user');
const Connectmongodb = require('./config/Connection');
// const { mongo } = require('mongoose');

// middleware -plugin
app.use(express.urlencoded({ extended: false }));

// custom middleware
app.use(logReqRes());
app.use(ResReq());

// connection
Connectmongodb("mongodb://localhost:27017/mongodblearning");
console.log("mongodb connected");


// routes
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
