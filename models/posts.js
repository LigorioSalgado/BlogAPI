// Aqui tenemos que hacer funciones que hagan el crud
const Model = require('./Model');

class Post extends Model{

    constructor(){
        super('posts')
    }
}

module.exports =  Post;
