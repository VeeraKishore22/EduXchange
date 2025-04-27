const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("project1DB", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected.");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB }; // ✅ Ensure correct export
