const db = require("../data/dbConfig");


function getProjects(){
    return db("projects")
};

function addProject(project){
    return db("projects").insert(project)
};

function getResources(){
    return db("resources")
};

function addResource(resource){
    return db("resources").insert(resource)
};

function getTasks(){
    return db("tasks")
};

function addTask(task){
    return db("tasks").insert(task)
}

module.exports ={
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask
}