const express = require('express');
const {celebrate, Joi, Segments} = require('celebrate');
const router = express.Router();
const UserController = require('../controllers/user');
const PostController = require('../controllers/posts');

const userCreateValidator = {
    [Segments.BODY] :{
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        birth_date: Joi.date(),
        gender: Joi.string().valid('male','female', 'other')
    } //schema de validacion
}

const postCreateValidator = {
    [Segments.BODY] :{
        title: Joi.string().required(),
        body: Joi.string().required(),
        category: Joi.string().required(),
        user_id: Joi.number().integer().required(),
    } //schema de validacion
}

// user routes

router.get('/users',UserController.fetch);
router.get('/users/:id', UserController.retrieve)
router.post('/users',celebrate(userCreateValidator) ,UserController.add)
router.put('/users/:id', UserController.modify)
router.delete('/users/:id', UserController.eliminate)
router.get('/users/:id/posts', UserController.populatedUser)
// posts routes
router.get('/posts/users',PostController.populatedPosts);
router.get('/posts',PostController.fetch);
router.get('/posts/:id', PostController.retrieve)
router.post('/posts', celebrate(postCreateValidator) ,PostController.add)
router.put('/posts/:id', PostController.modify)
router.delete('/posts/:id', PostController.eliminate)

module.exports =  router;