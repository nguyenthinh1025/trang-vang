const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Certificates.init(sequelize, DataTypes);
}

class Certificates extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    certificateId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    certificateName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    businessId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Businesses',
        key: 'businessId'
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
    tableName: 'Certificates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "certificateId" },
        ]
      },
      {
        name: "businessId",
        using: "BTREE",
        fields: [
          { name: "businessId" },
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
