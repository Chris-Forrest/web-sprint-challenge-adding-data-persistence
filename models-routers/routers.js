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

module.exports = router;