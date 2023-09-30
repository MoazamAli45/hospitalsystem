const express = require("express");

const router = express.Router();
const authController = require("../Controller/authController");
const userController = require("../Controller/userController");

router.post("/auth/login", authController.login);
router.post("/auth/signup", authController.signup);

router.use(authController.protect);

// Geting and updating user data
router.get("/me", userController.getMe);
router.patch("/updateMe", userController.updateMe);

//  for updating password
router.patch("/updateMyPassword", authController.updatePassword);

router.get("/logout", authController.logout);

module.exports = router;
