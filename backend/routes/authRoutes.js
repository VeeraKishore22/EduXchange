const express = require("express");
const { register, login, getProfile } = require("../controllers/authController");
const authenticate = require("../middleware/authMiddleware");
const controller = require("../controllers/SM_MP_CE_controllers");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticate, getProfile);
router.get("/:type", controller.getAll); // Get all records
router.get("/:type/:id", controller.getById); // Get a single record
router.post("/:type", controller.create); // Create a new record
router.put("/:type/:id", controller.update); // Update a record
router.delete("/:type/:id", controller.delete); // Delete a record

module.exports = router;
