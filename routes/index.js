const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const PostController = require('../controllers/posts');


// user routes

router.get('/users',UserController.fetch);
router.get('/users/:id', UserController.retrieve)
router.post('/users', UserController.add)
router.put('/users/:id', UserController.modify)
router.delete('/users/:id', UserController.eliminate)
router.get('/users/:id/posts', UserController.populatedUser)
// posts routes
router.get('/posts/users',PostController.populatedPosts);
router.get('/posts',PostController.fetch);
router.get('/posts/:id', PostController.retrieve)
router.post('/posts', PostController.add)
router.put('/posts/:id', PostController.modify)
router.delete('/posts/:id', PostController.eliminate)

module.exports =  router;