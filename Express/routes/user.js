// routes/user.js
const express = require('express');
const router = express.Router();

const {
    handleGetAllUser,
    handleGetAllUserId,
    handlePostAllUser,
    handlePatchAllUserId,
    handleDeleteUserId
} = require('../Controllers/usercontroller'); // Ensure path and names are correct

// Define routes
router.get("/", handleGetAllUser);
router.get("/:id", handleGetAllUserId);
router.post("/", handlePostAllUser);
router.patch("/:id", handlePatchAllUserId);
router.delete("/:id", handleDeleteUserId);

module.exports = router; // Correct export syntax
