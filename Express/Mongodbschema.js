const express = require('express');
const PORT = 3000;
// const users = require('./MOCK_DATA.json')
const app = express();
const fs = require('fs')
const mongoose = require('mongoose')
//middleware -plugin
app.use(express.urlencoded({ extended: false }))

//connection
mongoose
    .connect("mongodb://localhost:27017/mongodblearning")
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log("mongodb err", err));



//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    gender: {
        type: String,
    }
}, { timestamps: true })

const User = mongoose.model('user', userSchema)

app.use((req, res, next) => {
    // console.log("Hello from middleware");
    req.myUserName = "Anurag Bose"
    // return res.json({msg: "Hello from middleware 2"}) ;  
    next();
})

app.use((req, res, next) => {
    // console.log("Hello from middleware", req.myUserName);
    // return res.end("hey") ;  
    next();
})
//routes
// app.get("/api/users", async(req, res) => {
//     const alldbuser = await User.find({})
//    const html =`
//    <ul>
//    ${alldbuser.map((user) => `<li>${user.firstName}- ${user.email}</li>`).join("")}
//    </ul>`
//     return res.send(html);
// })
app.get("/api/users", async (req, res) => {
    const alldbuser = await User.find({})
    // res.setHeader("X-MyName", "Anurag Bose") //custom header
    //Always add x in custom header
    return res.json(alldbuser);
})

app.get("/api/users/:id", async(req, res) => {
    const user = await User.findById(req.params.id)
    return res.json(user)
});

app.post("/api/users", async (req, res) => {
    //todo: Create user
    const body = req.body;
    // console.log(body);
    if (!body || !body.first_name || !body.email || !body.last_name || !body.gender) {
        return res.status(400).json({ error: "bad status" })
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender
    });

    // console.log(result);

    return res.status(201).json({ msg: "successfull " })

    //    return res.json({status: 'pending'})
})

app.patch("/api/users/:id", async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {lastName: "Rai"})
    return res.json(user)
})

app.delete("/api/users/:id", async(req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    return res.json(user)
})
app.listen(PORT, console.log(`the server is runing port ${PORT}`)
)