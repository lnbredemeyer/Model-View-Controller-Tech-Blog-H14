const { Post } = require("../models");

const postData = [
    {
        title: "",
        post_content: "",
        user_id: 4
    },

    {
        title: "",
        post_content: "",
        user_id: 2
    },

    {
        title: "",
        post_content: "",
        user_id: 3
    },

    {
        title: "",
        post_content: "",
        user_id: 1
    },

    {
        title: "",
        post_content: "",
        user_id: 5
    },

    {
        title: "",
        post_content: "",
        user_id: 3
    },

    {
        title: "",
        post_content: "",
        user_id: 1
    },

    {
        title: "",
        post_content: "",
        user_id: 4
    },

  ]
  
const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;