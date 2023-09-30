const Complaint = require("../Model/complaintModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createComplaint = catchAsync(async (req, res) => {
  const complaint = await Complaint.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      complaint,
    },
  });
});
