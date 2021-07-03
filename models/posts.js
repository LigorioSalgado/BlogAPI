// Aqui tenemos que hacer funciones que hagan el crud
const Model = require('./Model');
const Populate = require('knex-populate');
const db = require('../data/db');
class Post extends Model{

    constructor(){
        super('posts')
    }

    populateUser(){
        //return this.db.innerJoin('users','posts.user_id','=','users.id').select('posts.*','users.first_name','users.last_name')
        return Populate(db,'posts')
                .find()
                .populate('users','user_id', 'user')// 1. Tabla de referncia, 2. foreign_key 3. alias(como se va a llamar mi campo)
                .exec()
    }

    searchByCategory(category){
        return this.db.where({category})
    }

    searchInBody(search){
        return this.db.where('body','like',`%${search}%`)
    }
}

module.exports =  Post;
