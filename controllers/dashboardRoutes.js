const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ['id', 'title', 'post_content', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['name', 'email'],
        },
      },
      {
        model: User,
        attributes: ['name', 'email'],
      },
    ],
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('dashboard', {
        posts,
        logged_in: true,
        username: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'post_content', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['name', 'email'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['name', 'email'],
        },
      },
    ],
  })
    .then((postData) => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this ID' });
        return;
      }

      const post = postData.get({ plain: true });
      console.log('sending ' + req.session.username);
      res.render('edit-post', {
        post,
        logged_in: true,
        username: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/new', (req, res) => {
  res.render('new-post', { username: req.session.username });
});

module.exports = router;