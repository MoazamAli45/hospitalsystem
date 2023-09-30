const catchAsync = require("../utils/catchAsync");
const User = require("../Model/userModel");

//  allowing fields to update
const filterObj = function (body, ...allowedFields) {
  const newObj = {};

  Object.keys(body).forEach((el) => {
    if (allowedFields.includes(el)) {
      // if include body k whole element in newObj
      newObj[el] = body[el];
      // console.log(newObj);
    }
  });
  return newObj;
};

exports.getMe = catchAsync(async (req, res) => {
  const { user } = req;

  const currentUser = await User.findById(user._id);
  currentUser.password = undefined;
  currentUser.confirmPassword = undefined;
  res.status(200).json({
    status: "success",
    data: {
      user: currentUser,
    },
  });
});

//   Only updating name and department
exports.updateMe = catchAsync(async (req, res) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("This route is not for update password", 403));
  }
  let filteredObj;
  if (req.body.department && req.body.name) {
    filteredObj = filterObj(req.body, "department", "name");
  } else if (req.body.name) {
    filteredObj = filterObj(req.body, "name");
  }

  const user = await User.findByIdAndUpdate(req.user.id, filteredObj, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
