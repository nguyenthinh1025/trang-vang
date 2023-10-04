const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CareersType.init(sequelize, DataTypes);
}

class CareersType extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    careersTypeId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    careersTypeName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CareersType',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "careersTypeId" },
        ]
      },
    ]
  });
  }
}
