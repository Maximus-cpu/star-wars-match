// Importing express framework
const express = require('express');
const router = express.Router();

// Importing the userController
const userController = require("../controllers/userController");

// route to the index page and retrieve the admins only
router.get('/', userController.getAdmins);

module.exports = router;