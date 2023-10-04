const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Products.init(sequelize, DataTypes);
}

class Products extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    productId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    productName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    serviceId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Services',
        key: 'serviceId'
      }
    },
    imageId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Images',
        key: 'imageId'
      }
    }
  }, {
    sequelize,
    tableName: 'Products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productId" },
        ]
      },
      {
        name: "serviceId",
        using: "BTREE",
        fields: [
          { name: "serviceId" },
        ]
      },
      {
        name: "imageId",
        using: "BTREE",
        fields: [
          { name: "imageId" },
        ]
      },
    ]
  });
  }
}
