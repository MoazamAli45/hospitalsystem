const mongoose = require("mongoose");
const complaintSchema = new mongoose.Schema({
  department: {
    type: String,
    required: ["true", "Please Enter your Department"],
  },
  hod: {
    type: String,
    required: ["true", "Please Enter your HOD name"],
  },
  jobDesc: {
    type: String,
    required: ["true", "Please Enter your Job Description"],
  },
  dateOfReq: {
    type: Date,
    default: Date.now,
  },
  natureOfJob: {
    type: String,
    required: ["true", "Please Enter the Nature of Job"],
  },
  estimatedCost: {
    type: Number,
    required: ["true", "Please Enter the Estimated Cost"],
  },
  urgency: {
    type: String,
    default: "general",
  },
  status: {
    type: String,
    default: "pending",
  },
  allocatedTo: {
    type: String,
    default: "none",
  },
  dateOfCompletion: {
    type: Date,
  },
});

const Complaint = mongoose.model("complaints", complaintSchema);
module.exports = Complaint;
