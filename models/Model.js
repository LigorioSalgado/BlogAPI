const db = require('../data/db');

class Model{


    constructor(table,fields = [`${table}.*`]){
        // ['users.*']
        this.db = db(table)
        this.fields = fields
    }

    findAll(){
        return this.db
    }

    findOne(id){
        return this.db.where({id})
    }

    create(data){
        return this.db.insert(data,this.fields)
    }

    update(data,id){
        return this.db.where({id}).update(data, this.fields)
    }

    delete(id){
        return this.db.where({id}).del()
    }

}

module.exports = Model;