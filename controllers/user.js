// const {findAll,findOne, create, update, delete:remove } = require('../models/users');
const User = require('../models/users');

const user = new User();

module.exports = {
    fetch: (req,res) => {
        user.findAll().then( (users) => res.status(200).json(users) )
    },
    retrieve: (req, res) => {
        user.findOne(req.params.id).then( (user) => {
            res.status(200).json(user)
        }).catch( (error) => {
            res.status(400).json(error)
        })  
    },
    add: (req, res) => {
        user.create(req.body).then((user) => {
            res.status(201).json(user)
        }).catch((error) => {
            res.status(400).json(error);
        })
    },
    modify: (req,res) => {
        user.update(req.params.id,req.body).then( (user) => {
            res.status(200).json(user)
        }).catch((error) => {
            res.status(400).json(error);
        })
    },

    eliminate: (req, res) => {
        user.delete(req.params.id).then(() => {
            res.status(204).send()
        }).catch((error) => {
            res.status(400).json(error);
        })

    }

}