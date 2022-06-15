const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const sequelize = require("../config/connection");

// create our Comment model
class Comment extends Model {}

// create fields/columns for Comment model
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
        }
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },

    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Post",
        key: "id",
      },
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Comment",
  }
);

module.exports = Comment;