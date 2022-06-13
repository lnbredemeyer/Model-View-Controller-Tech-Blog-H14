const { Post } = require("../models");

const postData = [
    {
        title: "Seed Post 1",
        post_content: "Seed Post content 1, info following is just filler text. There is no truth here. Trust no one.",
        user_id: 4
    },

    {
        title: "Seed Post 2",
        post_content: "Seed Post content 2, info following is just filler text. There is no truth here. Trust no one.",
        user_id: 2
    },

    {
        title: "Seed Post 3",
        post_content: "Seed Post content 3, info following is just filler text. There is no truth here. Trust no one.",
        user_id: 3
    },

    {
        title: "Seed Post 4",
        post_content: "Seed Post content 4, info following is just filler text. There is no truth here. Trust no one.",
        user_id: 1
    },

    {
        title: "Seed Post 5",
        post_content: "Seed Post content 5, info following is just filler text. There is no truth here. Trust no one.",
        user_id: 5
    },

    {
        title: "Seed Post 6",
        post_content: "Seed Post content 6, info following is just filler text. There is no truth here. Trust no one.",
        user_id: 3
    },

    {
        title: "Seed Post 7",
        post_content: "Seed Post content 7, info following is just filler text. There is no truth here. Trust no one.",
        user_id: 1
    },

    {
        title: "Seed Post 8",
        post_content: "Seed Post content 8, info following is just filler text. There is no truth here. Trust no one.",
        user_id: 4
    },
  ]
  
const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;