const { Comment } = require("../models");

const commentData = [
    {}
  ]
  
const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;