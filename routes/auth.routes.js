const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

router.post("/login", authController.login);
router.post("/logout", verifyToken, authController.logout);
router.post("/refresh-token", authController.refreshToken);

module.exports = router;
