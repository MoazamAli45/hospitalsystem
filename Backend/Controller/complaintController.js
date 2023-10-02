const Complaint = require("../Model/complaintModel");
const catchAsync = require("../utils/catchAsync");

exports.createComplaint = catchAsync(async (req, res) => {
  const complaint = await Complaint.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      complaint,
    },
  });
});

exports.getPendingComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find({ status: "PENDING" });

  res.status(200).json({
    status: "success",
    total: complaints.length,
    data: {
      complaints,
    },
  });
});

exports.getCompletedComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find({ status: "COMPLETED" });

  res.status(200).json({
    status: "success",
    total: complaints.length,
    data: {
      complaints,
    },
  });
});
exports.getInProgressComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find({ status: "INPROGRESS" });

  res.status(200).json({
    status: "success",
    total: complaints.length,
    data: {
      complaints,
    },
  });
});

exports.getAllComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find().sort("dateOfReq");

  res.status(200).json({
    status: "success",
    total: complaints.length,
    data: {
      complaints,
    },
  });
});

exports.getAllocateComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find({ allocatedTo: "none" }).sort(
    "dateOfReq"
  );

  res.status(200).json({
    status: "success",
    total: complaints.length,
    data: {
      complaints,
    },
  });
});

exports.getComplaint = catchAsync(async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      complaint,
    },
  });
});

exports.updateComplaint = catchAsync(async (req, res) => {
  const complaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      complaint,
    },
  });
});
