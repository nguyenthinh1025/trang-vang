const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Categories.init(sequelize, DataTypes);
}

class Categories extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    categoryId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    categoryName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mainCategoryId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'MainCategory',
        key: 'mainCategoryId'
      }
    },
    businessId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Businesses',
        key: 'businessId'
      }
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
      {
        name: "mainCategoryId",
        using: "BTREE",
        fields: [
          { name: "mainCategoryId" },
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
