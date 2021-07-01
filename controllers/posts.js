const {findAll,findOne, create, update, delete:remove } = require('../models/posts');

module.exports = {
    fetch: (req,res) => {
        findAll().then( (posts) => res.status(200).json(posts) )
    },
    retrieve: (req, res) => {
        findOne(req.params.id).then( (post) => {
            res.status(200).json(post)
        }).catch( (error) => {
            res.status(400).json(error)
        })  
    },
    add: (req, res) => {
        create(req.body).then((post) => {
            res.status(201).json(post)
        }).catch((error) => {
            res.status(400).json(error);
        })
    },
    modify: (req,res) => {
        update(req.params.id,req.body).then( (post) => {
            res.status(200).json(post)
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