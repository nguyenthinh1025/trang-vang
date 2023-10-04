const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Services.init(sequelize, DataTypes);
}

class Services extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    serviceId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    serviceName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Services',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "serviceId" },
        ]
      },
    ]
  });
  }
}
