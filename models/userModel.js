// Importing fs module for writing and reading the database.json file
const fs = require('fs');
// Importing path module
const path = require('path');
// path to the database.json file
const dbFilePath = path.join(__dirname, '../data/database.json');
// path to the matching algorithm
const matchingAlgorithm = require("../services/matchingAlgorithm");

//Reads from database.json
function readDB() {
    try {
        const dbData = fs.readFileSync(dbFilePath, 'utf8'); // utf8 for interpreting the data as a string
        return JSON.parse(dbData);
    } catch (error) {
        console.error('Error reading database', error);
        return { users: [] }; // returns empty array if a error occurs
    }
}

//Writes to database.json
function writeUsersDB(data) {
    try {
        fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing to database:', error);
    }
}

//Returns all users
function getUsers() {
    const dbData = readDB();
    const users = dbData.users;
    return users.filter(user => !user.deleted);
}

//Returns specific user based on id
function getUser(id) {
    const users = getUsers();
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex  !== -1) {
        return users[userIndex];
    }
    else {
        return "Error 404: User not found";
    }
}

//Gets users whose role is admin
function getAdmins() {
    const users = getUsers();
    // .filter method gets all the users in the array with role === 'admin'
    // .sort sorts the admins alphabetically by name property
    return users.filter(user => user.role === 'admin').sort((a, b) => a.name.localeCompare(b.name));
}

//Updates existing user with new data provided
function updateUser(id, data){
    const user = getUser(parseInt(id));
    const dbData = readDB();
    const users = dbData.users;
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex < 0) {
        return false;
    }
    else {
        //update the user in the array
        users[userIndex].name = data.name;
        users[userIndex].surname = data.surname;
        users[userIndex].password = data.password;

        writeUsersDB(dbData);
        //return updated user
        return users[userIndex];
    }
}

//Create new user with data provided
function createUser(data){

    // Format question answers into an array of objects
    const questions = Object.keys(data).splice(3, 5);
    let questionAnswers = [];
    for (let i = 0; i < questions.length; i++) {
        let currentQuestion = parseInt(questions[i].split('-')[2]);
        if (currentQuestion % 2 === 0) {
            questionAnswers.push({
               questionId: currentQuestion,
               answer: false
            });
        } else {
            questionAnswers.push({
                questionAnswers: currentQuestion,
                answer: true
            });
        }
    }
    const matchedUserCharacter = matchingAlgorithm.matchUserToCharacter(questionAnswers);
    const dbData = readDB();
    const users = dbData.users;
    let newUser = {
        id: users.length + 1,
        name: data.name,
        surname: data.surname,
        role: 'client',
        matchedCharacter: matchedUserCharacter,
        password: data.password,
        deleted: false
    };
    dbData.users.push(newUser);
    writeUsersDB(dbData);
    return newUser;
}

//Delete user based on id
function deleteUser(id){
    const dbData = readDB();
    const users = dbData.users;
    let userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex < 0) {
        return -1;
    }
    else if (users[userIndex].role === 'admin') {
        return 0;
    }
    else if (users[userIndex].role === 'client') {
        users[userIndex].deleted = true;
        writeUsersDB(dbData);
        return 1;
    }
}

//Gets survey questions from the database
function getQuestions() {
    const dbData = readDB();
    return dbData.questions;
}

//Export functions to be accessed in other files
module.exports = {
    getUsers,
    getUser,
    getAdmins,
    updateUser,
    createUser,
    deleteUser,
    getQuestions
}