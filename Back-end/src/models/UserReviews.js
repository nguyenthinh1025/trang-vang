const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return UserReviews.init(sequelize, DataTypes);
}

class UserReviews extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    userReviewId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Users',
        key: 'userId'
      }
    },
    reviewId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Reviews',
        key: 'reviewId'
      }
    }
  }, {
    sequelize,
    tableName: 'UserReviews',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userReviewId" },
        ]
      },
      {
        name: "userId",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "reviewId",
        using: "BTREE",
        fields: [
          { name: "reviewId" },
        ]
      },
    ]
  });
  }
}
