const {findAll,findOne, create, update, delete:remove } = require('../models/users');

module.exports = {
    fetch: (req,res) => {
        findAll().then( (users) => res.status(200).json(users) )
    },
    retrieve: (req, res) => {
        findOne(req.params.id).then( (user) => {
            res.status(200).json(user)
        }).catch( (error) => {
            res.status(400).json(error)
        })  
    },
    add: (req, res) => {
        create(req.body).then((user) => {
            res.status(201).json(user)
        }).catch((error) => {
            res.status(400).json(error);
        })
    },
    modify: (req,res) => {
        update(req.params.id,req.body).then( (user) => {
            res.status(200).json(user)
        }).catch((error) => {
            res.status(400).json(error);
        })
    },

    eliminate: (req, res) => {
        remove(req.params.id).then(() => {
            res.status(204).send()
        }).catch((error) => {
            res.status(400).json(error);
        })

    }

}