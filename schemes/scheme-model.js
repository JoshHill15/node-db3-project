const db = require("../data/knexConfig")

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    findSteps,
    addStep
}

function find(){
    return db("schemes")
}

function findById(id){
    return db("schemes").where({ id }).first()
}

function add(body){
    return db("schemes").insert(body)
}

function remove(id){
    return db("schemes").where({ id }).del()
}

function update(body,id){
   return db("schemes").where({ id }).update(body)
}

function findSteps(id){
    return db("steps").where({ id })
}

function addStep(body, id){
    return db("steps").where({ id }).insert(body)
}
