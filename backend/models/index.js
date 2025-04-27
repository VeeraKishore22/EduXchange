const { sequelize } = require("../config/db"); // ✅ Correct import
const User = require("./userReg"); // ✅ Direct import (already a model)
const { StudyMaterial, MarketPlace, CompetativeExams } = require("./SM_MP_CE_tables");

// ✅ Sync database function
const syncDB = async () => {
  try {
    console.log("🔄 Syncing Database...");
    await sequelize.sync({ alter: true }); // ✅ Ensure tables sync properly
    console.log("✅ All tables created successfully.");
  } catch (error) {
    console.error("❌ Table creation failed:", error);
  }
};

module.exports = { sequelize, syncDB, User, StudyMaterial, MarketPlace, CompetativeExams };
