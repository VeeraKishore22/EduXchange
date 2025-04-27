const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db"); // Import your Sequelize instance

const StudyMaterial = sequelize.define("StudyMaterial", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  exam: { type: DataTypes.STRING, allowNull: false },
  file_path: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

const MarketPlace = sequelize.define("MarketPlace", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  file_path: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

const CompetativeExams = sequelize.define("CompetativeExams", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  center_location: { type: DataTypes.STRING, allowNull: false },
  exam_date: { type: DataTypes.DATE, allowNull: false },
}, { timestamps: true });

module.exports = { StudyMaterial, MarketPlace, CompetativeExams };
