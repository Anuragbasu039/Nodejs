const express = require('express');
const PORT = 3000;
const users = require('./MOCK_DATA.json')
const app = express();
const fs = require('fs')
//middleware -plugin
app.use(express.urlencoded({ extended: false }))

app.use((req,res,next)=> {
    console.log("Hello from middleware");
    req.myUserName = "Anurag Bose"
    // return res.json({msg: "Hello from middleware 2"}) ;  
    next();
})

app.use((req,res,next)=> {
    console.log("Hello from middleware", req.myUserName);
    return res.end("hey") ;  
    // next();
})
//routes
app.get("/api/users", (req, res) => {
    return res.json(users);
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
});

app.post("/api/users", (req, res) => {
    //todo: Create user
    const body = req.body;
    console.log(body);
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: 'success', id: users.length })
    })

    //    return res.json({status: 'pending'})
})

app.patch("/api/users/:id", (req, res) => {
    //todo: edit the user with id
    return res.json({ status: 'pending' })
})

app.delete("/api/users/:id", (req, res) => {
    //todo: delete user
    return res.json({ status: 'pending' })
})
app.listen(PORT, console.log(`the server is runing port ${PORT}`)
)