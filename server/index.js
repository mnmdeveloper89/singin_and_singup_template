require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const mongoose = require('mongoose');

const http = require('http');
const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/singin",{useNewUrlParser: true, useUnifiedTopology: true},
    (err)=>{
    if(!err) console.log('MongooDB connected');
    else console.log('MongooDB error 404');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
