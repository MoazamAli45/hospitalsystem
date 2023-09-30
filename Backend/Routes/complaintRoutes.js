const express = require("express");
const router = express.Router();
const authController = require("../Controller/authController");

const { createComplaint } = require("../Controller/complaintController");

router.use(authController.protect);

router.post("/", createComplaint);
module.exports = router;
