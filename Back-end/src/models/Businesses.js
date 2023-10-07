const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Businesses.init(sequelize, DataTypes);
}

class Businesses extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    businessId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    businessName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    businessNameEng: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operator: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rating: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    numberOfRatings: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    establishedYear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    employees: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phoneOperator: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emailOperator: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Businesses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "businessId" },
        ]
      },
    ]
  });
  }
}
