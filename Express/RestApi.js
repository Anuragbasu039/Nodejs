const express = require('express');
const PORT = 3000;
const users = require('./MOCK_DATA.json')
const app = express();



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
   return res.json({status: 'pending'})
})

app.patch("/api/users/:id", (req, res) => {
    //todo: edit the user with id
   return res.json({status: 'pending'})
})

app.delete("/api/users/:id", (req, res) => {
    //todo: delete user
   return res.json({status: 'pending'})
})
app.listen(PORT, console.log(`the server is runing port ${PORT}`)
)