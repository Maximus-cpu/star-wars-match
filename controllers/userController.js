//import the userModel file
const userModel = require('../models/userModel');

//Get all users
function getUsers (req, res, next) {
    let users = userModel.getUsers();
    res.render('users', { users });
}

//Get a user based on id
function getUser (req, res, next) {
    let user = userModel.getUser(req.params.id);
    //res.json(user);
    res.render('user', { user });
}

//Get users who have the admin role
function getAdmins (req, res, next) {
    let admins = userModel.getAdmins();
    res.render('index', { admins });
}

//Update a user based on new data
function updateUser (req, res, next) {
    //1: update user in the model
    let responseFromModel = userModel.updateUser(req.params.id, req.body);
    //2: if we don't find a user -> error message
    if (responseFromModel === false) {
        res.send("User not found.");
    }
    //3: if  the user was updated, redirect to their page
    else {
        res.redirect('/users/' + responseFromModel.id);
    }
}

//Render the edit page of a single user based on id
function editUser (req, res, next) {
    //1: get the user (the data we want to display)
    let user = userModel.getUser(req.params.id);
    //2: render the edit form
    res.render('editUser', { user });
}

//Render the create page for a user and put the questions for the matching survey
function newUser (req, res, next) {
    let questions = userModel.getQuestions();
    res.render('newUser', { questions });
}

//Add a new user to all users
function addUser (req, res, next) {
    let newUser = userModel.createUser(req.body);
    res.redirect('/users/' + newUser.id);
}

//Delete a user with the current id from all users
function deleteUser (req, res, next) {
    let responseFromModel = userModel.deleteUser(req.params.id);
    if (responseFromModel === -1) {
        res.send("User not found.");
    }
    else if (responseFromModel === 1) {
        res.redirect('/users');
    }
    else if (responseFromModel === 0) {
        res.status(403).render('error', { message: 'Error 403 - Deleting admins not allowed.' });
    }
}

module.exports = {
    getUsers,
    getUser,
    getAdmins,
    updateUser,
    editUser,
    newUser,
    addUser,
    deleteUser
}