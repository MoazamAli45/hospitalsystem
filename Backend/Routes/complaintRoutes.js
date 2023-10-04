const express = require("express");
const router = express.Router();
const authController = require("../Controller/authController");

const {
  createComplaint,
  getAllComplaints,
  getAllocateComplaints,
  getComplaint,
  getPendingComplaints,
  updateComplaint,
  getCompletedComplaints,
  getInProgressComplaints,
  getAllocatedComplaints,
} = require("../Controller/complaintController");

router.use(authController.protect);

router.post("/", createComplaint);
router.get("/", getAllComplaints);
router.get("/allocate-complaints", getAllocateComplaints);
router.get("/allocated-complaints", getAllocatedComplaints);

router.get("/pending-complaints", getPendingComplaints);
router.get("/completed-complaints", getCompletedComplaints);
router.get("/inprogress-complaints", getInProgressComplaints);
router.get("/:id", getComplaint);
router.patch("/:id", updateComplaint);

module.exports = router;
