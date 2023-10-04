const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Users.init(sequelize, DataTypes);
}

class Users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    userId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    zalo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    registrationDate: {
      type: DataTypes.DATEONLY,
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
    position: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
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
