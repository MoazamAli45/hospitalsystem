const express = require("express");
const morgan = require("morgan");

//   global error Handler
const globalErrorHandler = require("./Controller/errorController");
//   Route
const userRouter = require("./Routes/userRoutes");
const complaintRouter = require("./Routes/complaintRoutes");
// For mongo sanitization
const mongoSanitize = require("express-mongo-sanitize");
// For html Sanitization
const xss = require("xss-clean");

const helmet = require("helmet");

const cors = require("cors");

const app = express();
// For showing on development
app.use(morgan("dev"));

app.use(express.json({ limit: "10kb" }));

//   without this you can login as {"$gt":""} with known password without signup
app.use(mongoSanitize());
// Data sanitization against XSS
// html sanitization
app.use(xss());

app.use(helmet());

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to hospital System",
  });
});

//   Routes

app.use("/api/v1/users", userRouter);
app.use("/api/v1/complaints", complaintRouter);

app.use(globalErrorHandler);

module.exports = app;
