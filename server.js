const express = require("express");

const server = express();

const projectsRouter = require("./models-routers/routers");

server.use(express.json());
server.use(logger)
server.use("/api/projects", projectsRouter);


function logger(req,res,next){
    console.log(`${new Date().toISOString()} ${req.ip} ${req.method} ${req.url}`)
    next()
}

server.use((err, req,res,next) =>{
    console.log(err)
    res.status(500).json({ message: "Something went wrong"})
})

module.exports = server;