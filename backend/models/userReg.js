const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db"); // ✅ Ensure correct import

if (!sequelize) {
  console.error("❌ Sequelize instance is undefined in userReg.js");
}

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  prefix: { 
    type: DataTypes.STRING, 
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: { 
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true,
  },
  exam: { 
    type: DataTypes.STRING, 
    allowNull: false,
  },
}, { timestamps: true });

module.exports = User;
