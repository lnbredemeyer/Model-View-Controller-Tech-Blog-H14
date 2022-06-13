const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "Seed Comment content 1",
        user_id: 3,
        post_id: 8
    },

    {
        comment_text: "Seed Comment content 2",
        user_id: 1,
        post_id: 4
    },

    {
        comment_text: "Seed Comment content 3",
        user_id: 2,
        post_id: 3
    },

    {
        comment_text: "Seed Comment content 4",
        user_id: 5,
        post_id: 1
    },
  ]
  
const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;