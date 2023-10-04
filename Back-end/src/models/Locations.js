const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Locations.init(sequelize, DataTypes);
}

class Locations extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    locationId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    locationName: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'Locations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locationId" },
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
