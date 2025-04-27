const jwt = require("jsonwebtoken");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYXJ2ZXNoQGJ3Y3ViZXNtYXJ0LmNvbSIsImlhdCI6MTc0MzI0MTk0MiwiZXhwIjoxNzQzMjQ1NTQyfQ.2QiPHOqpJSFpfHaVe5Bq4KmjGlzMxm_tyl9vBFxIKjw";

const secret = "1c6594c6d9a7717c33e28ee59838982bfb791a5d8f00610305b78264b3c7ced1381a07d92c398572da7f3f5153d37b33e5ed1122b53fbc0b32fa9e43de2b7a94";

try {
    const decoded = jwt.verify(token, secret);
    console.log("✅ Token is valid:", decoded);
} catch (err) {
    console.error("❌ Invalid token:", err.message);
}
