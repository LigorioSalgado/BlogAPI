const Post = require('../models/posts');

module.exports = {
    fetch: (req,res) => {
        const postObj = new Post();
        postObj.findAll().then( (posts) => res.status(200).json(posts) )
    },
    retrieve: (req, res) => {
        const postObj = new Post();
        postObj.findOne(req.params.id).then( (post) => {
            res.status(200).json(post)
        }).catch( (error) => {
            res.status(400).json(error)
        })  
    },
    add: (req, res) => {
        const postObj = new Post();
        postObj.create(req.body).then((post) => {
            res.status(201).json(post)
        }).catch((error) => {
            res.status(400).json(error);
        })
    },
    modify: (req,res) => {
        const postObj = new Post();
        postObj.update(req.params.id,req.body).then( (post) => {
            res.status(200).json(post)
        }).catch((error) => {
            res.status(400).json(error);
        })
    },

    eliminate: (req, res) => {
        const postObj = new Post();
        postObj.delete(req.params.id).then(() => {
            res.status(204).send()
        }).catch((error) => {
            res.status(400).json(error);
        })

    }

}