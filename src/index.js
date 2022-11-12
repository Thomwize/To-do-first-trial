const express = require('express');
const {json} = require('express');
const connect = require('./config/database');

const todoRoute = require('./router/todoRoutes');
connect();

const app = express()
app.use(json());
app.use("/todo", todoRoute);


const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send('To-do list on Zuri')
});
app.listen(PORT, ()=>{
    console.log(`app is connected on port ${PORT}`)
});