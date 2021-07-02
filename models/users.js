// Aqui tenemos que hacer funciones que hagan el crud
const Model = require('./Model');
const Populate = require('knex-populate');
const db =  require('../data/db');

class User extends Model{

    constructor(){
        super('users')
    }

    populatePosts(id){
        return Populate(db,'users')
                .findById(id)
                .populate('posts','user_id', 'posts')
                .limitTo(10)
                .exec()
    }
}

module.exports = User;

/* module.exports = {

    findAll: () => {
        //va a traer todos los usuarios de la BD
        return db('users')
    },

    create: (data) => {
        // va a crear un usuario
        return db('users').insert(data,['id','email', 'first_name'])
    },

    findOne: (id) => {
        // va a traer un usuario en particular
        return db('users').where({id})
    },

    update: (id,data) => {
        //va a modificar  un usuario
        return db('users').where({id}).update(data, ['id','email','first_name','last_name','gender', 'birth_date'])
    },

    delete: (id) => {
        // va a borra un usuario
        return db('users').where({id}).del()
    }

} */