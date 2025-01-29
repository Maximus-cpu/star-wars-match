// Importing express framework
const express = require('express');
const router = express.Router();

// Importing the userController
const userController = require("../controllers/userController");

//At the '/' route using .get and calling the getUsers() function in the userController
router.get('/', userController.getUsers);

router.route('/new')
    .get(userController.newUser)
    .post(userController.addUser);

// At route that include '/:id' we are using
// the regular expression ([1-9][0-9]{0,2}|1000)
// to filter only positive integers from 0 to 1000.
router.route("/:id([1-9][0-9]{0,2}|1000)")
    .get(userController.getUser)
    .post(userController.updateUser);

router.get("/:id([1-9][0-9]{0,2}|1000)/edit", userController.editUser);
router.post("/:id([1-9][0-9]{0,2}|1000)/delete", userController.deleteUser);

module.exports = router;