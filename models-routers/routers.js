const express = require("express");

const db = require("./models");

const router = express.Router();

router.get("/", async(req,res,next) => {
    try{
        const projects = await db.getProjects()
        res.status(200).json(projects)
    }catch(err){
        next(err)
    }
});

router.post("/", async(req,res,next) => {
    try{
        const project = req.body
        const projectId = await db.addProject(project)
        res.status(201).json(projectId)
    }catch(err){
        next(err)
    }
});



module.exports = router;