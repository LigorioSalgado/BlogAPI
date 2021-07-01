// Aqui tenemos que hacer funciones que hagan el crud
const db = require('../data/db');


module.exports = {

    findAll: () => {
        return db('posts')
    },

    create: (data) => {
        return db('posts').insert(data,['id','title', 'created_at'])
    },

    findOne: (id) => {
        return db('posts').where({id})
    },

    update: (id,data) => {
        return db('posts').where({id}).update(data, ['id','title','body','user_id','category'])
    },

    delete: (id) => {
        return db('posts').where({id}).del()
    }

}