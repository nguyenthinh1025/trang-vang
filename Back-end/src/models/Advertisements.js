const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Advertisements.init(sequelize, DataTypes);
}

class Advertisements extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    adId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    userPhone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    businessName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    career: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    productService: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imageId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Images',
        key: 'imageId'
      }
    },
    status: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Advertisements',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "adId" },
        ]
      },
      {
        name: "FK_Advertisements_Images",
        using: "BTREE",
        fields: [
          { name: "imageId" },
        ]
      },
    ]
  });
  }
}
