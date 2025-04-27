const { StudyMaterial, MarketPlace, CompetativeExams } = require("../models/SM_MP_CE_tables");
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
const multer = require("multer");
const path = require("path");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// File filter to allow PDFs and images only
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, JPG, JPEG, and PNG files are allowed!"), false);
  }
};

// Multer upload instance
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Get all records
exports.getAll = asyncHandler(async (req, res) => {
  const { type } = req.params;
  const model = getModel(type);
  if (!model) return res.status(400).json({ message: "Invalid type parameter" });

  const data = await model.findAll();
  res.json(data);
});

// Get record by ID
exports.getById = asyncHandler(async (req, res) => {
  const { type, id } = req.params;
  const model = getModel(type);
  if (!model) return res.status(400).json({ message: "Invalid type parameter" });

  const data = await model.findByPk(id);
  if (!data) return res.status(404).json({ message: "Record not found" });

  res.json(data);
});

// Create new record (File Upload only for StudyMaterial & MarketPlace)
exports.create = [
  (req, res, next) => {
    const { type } = req.params;
    if (type === "study-materials" || type === "marketplace") {
      upload.single("file")(req, res, next);
    } else {
      next();
    }
  },
  asyncHandler(async (req, res) => {
    try {
      const { type } = req.params;
      const payload = req.body;
      const model = getModel(type);

      if (!model) {
        return res.status(400).json({ message: "Invalid type parameter" });
      }

      if ((type === "study-materials" || type === "marketplace") && req.file) {
        payload.file_path = req.file.path; // Store file path in DB
      }

      const newData = await model.create(payload);
      res.status(201).json(newData);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Server error", error });
    }
  }),
];

// Update record (File Upload only for StudyMaterial & MarketPlace)
exports.update = [
  (req, res, next) => {
    const { type } = req.params;
    if (type === "study-materials" || type === "marketplace") {
      upload.single("file")(req, res, next);
    } else {
      next();
    }
  },
  asyncHandler(async (req, res) => {
    const { type, id } = req.params;
    const payload = req.body;
    const model = getModel(type);
    if (!model) return res.status(400).json({ message: "Invalid type parameter" });

    const record = await model.findByPk(id);
    if (!record) return res.status(404).json({ message: "Record not found" });

    if ((type === "study-materials" || type === "marketplace") && req.file) {
      payload.file_path = req.file.path;
    }

    await record.update(payload);
    res.json(record);
  }),
];

// Delete record by ID
exports.delete = asyncHandler(async (req, res) => {
  const { type, id } = req.params;
  const model = getModel(type);
  if (!model) return res.status(400).json({ message: "Invalid type parameter" });

  const record = await model.findByPk(id);
  if (!record) return res.status(404).json({ message: "Record not found" });

  await record.destroy();
  res.json({ message: "Record deleted successfully" });
});

// Helper function to get model based on type
function getModel(type) {
  switch (type) {
    case "study-materials":
      return StudyMaterial;
    case "marketplace":
      return MarketPlace;
    case "competative_exams":
      return CompetativeExams;
    default:
      return null;
  }
}
