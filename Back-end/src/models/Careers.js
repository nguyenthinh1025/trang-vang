const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Careers.init(sequelize, DataTypes);
}

class Careers extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    careerId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    careerName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
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
    careersTypeId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'CareersType',
        key: 'careersTypeId'
      }
    },
    image: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'Images',
        key: 'imageId'
      }
    }
  }, {
    sequelize,
    tableName: 'Careers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "careerId" },
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
        name: "careersTypeId",
        using: "BTREE",
        fields: [
          { name: "careersTypeId" },
        ]
      },
      {
        name: "imageId",
        using: "BTREE",
        fields: [
          { name: "image" },
        ]
      },
    ]
  });
  }
}
