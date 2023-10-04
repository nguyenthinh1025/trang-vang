const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Favorites.init(sequelize, DataTypes);
}

class Favorites extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    favoriteId: {
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
    businessId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Businesses',
        key: 'businessId'
      }
    }
  }, {
    sequelize,
    tableName: 'Favorites',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "favoriteId" },
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
        name: "businessId",
        using: "BTREE",
        fields: [
          { name: "businessId" },
        ]
      },
    ]
  });
  }
}
