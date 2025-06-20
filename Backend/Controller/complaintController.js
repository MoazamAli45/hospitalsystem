const Complaint = require("../Model/complaintModel");
const User = require("../Model/userModel");
const catchAsync = require("../utils/catchAsync");

exports.createComplaint = catchAsync(async (req, res) => {
  const userId = req.user._id;

  // Add user ID to the request body
  req.body.user = userId;

  const complaint = await Complaint.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      complaint,
    },
  });
});

exports.getPendingComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find({ status: "PENDING" })
    .sort({
      dateOfReq: -1,
    })
    .populate("user");

  console.log(complaints);
  res.status(200).json({
    status: "success",
    total: complaints.length,
    data: {
      complaints,
    },
  });
});

exports.getCompletedComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find({ status: "COMPLETED" })
    .sort({
      dateOfReq: -1,
    })
    .populate("user");

  res.status(200).json({
    status: "success",
    total: complaints.length,
    data: {
      complaints,
    },
  });
});
exports.getInProgressComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find({ status: "INPROGRESS" })
    .sort({
      dateOfReq: -1,
    })
    .populate("user");

  res.status(200).json({
    status: "success",
    total: complaints.length,
    data: {
      complaints,
    },
  });
});

exports.getAllComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find().sort({ dateOfReq: -1 });

  res.status(200).json({
    status: "success",
    total: complaints.length,
    data: {
      complaints,
    },
  });
});

exports.getAllocateComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find({ allocatedTo: "none" }).sort({
    dateOfReq: -1,
  });

  res.status(200).json({
    status: "success",
    total: complaints.length,
    data: {
      complaints,
    },
  });
});
exports.getAllocatedComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find({
    allocatedTo: { $ne: "none" },
  }).sort({
    dateOfReq: -1,
  });

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
