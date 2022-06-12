const userSeeds = require("./userData");
const postSeeds = require("./postData");
const commentSeeds = require("./commentData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("-------SYNCED-------");

  await userSeeds();
  console.log("-------USERS ADDED-------");

  await postSeeds();
  console.log("------POSTS ADDED--------");

  await commentSeeds();
  console.log("------COMMENTS ADDED--------");

  process.exit(0);
};

seedAll();