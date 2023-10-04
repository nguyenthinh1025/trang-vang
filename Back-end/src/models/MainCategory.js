const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return MainCategory.init(sequelize, DataTypes);
}

class MainCategory extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    mainCategoryId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    manCategoryName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MainCategory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mainCategoryId" },
        ]
      },
    ]
  });
  }
}
