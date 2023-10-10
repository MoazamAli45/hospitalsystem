const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
// PROMISIFY FOR RETURN PROMISE FROM JWT VERIFY METHoD
const { promisify } = require("util");

// creating jwt token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// send token method
const createdSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  // Sending  cookie
  res.cookie("jwt", token, cookieOptions);
  res.setHeader("Access-Control-Allow-Credentials", "true");

  //    so that password not send when signup or login
  user.password = undefined;
  user.confirmPassword = undefined;
  // sending response
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

//  Signup
exports.signup = catchAsync(async (req, res) => {
  // console.log("Signup", req.body);
  const user = await User.create(req.body);

  createdSendToken(user, 201, res);
});

//   login
exports.login = catchAsync(async (req, res) => {
  const { name, password } = req.body;
  // 1) Check if email and password exist
  if (!name || !password) {
    return next(new AppError("Please provide name and password!", 400));
  }

  const user = await User.findOne({ name }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    throw new AppError("Incorrect name or password", 401);
  }

  createdSendToken(user, 200, res);
});
//  Protect
exports.protect = catchAsync(async (req, res, next) => {
  // console.log("Protect", req);
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } // now getting from cookies as in original web page
  else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    throw new AppError("You are not logged in.Please login to get access", 401);
  }

  //  decoding token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    throw new AppError(
      "The user belonging to this token does no longer exist",
      401
    );
  }

  req.user = currentUser;
  // console.log(currentUser);
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new AppError(
        "You do not have permission to perform this action",
        403
      );
    }
    next();
  };
};

//  Logout
exports.logout = (req, res) => {
  const cookieOptions = {
    // will remain for 10 sec
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", "loggedout", cookieOptions);
  res.status(200).json({
    status: "success",
  });
};

//   update password

exports.updatePassword = catchAsync(async (req, res, next) => {
  // const { currentPassword, newPassword, confirmPassword } = req.body;
  const user = await User.findById(req.user.id).select("+password");

  // UPDATE PASSWORD
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  await user.save();
  createdSendToken(user, 200, res);
});
