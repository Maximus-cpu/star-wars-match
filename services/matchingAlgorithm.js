const fs = require('fs');
const path = require('path');
const dbFilePath = path.join(__dirname, '../data/database.json');

//Reads from database.json
function readDB() {
    try {
        const dbData = fs.readFileSync(dbFilePath, 'utf8'); // utf8 for interpreting the data as a string
        return JSON.parse(dbData);
    } catch (error) {
        console.error('Error reading database', error);
        return { users: [] }; // returns empty array if an error occurs
    }
}

// function for matching a star wars character to our newly created user
function matchUserToCharacter(newUserAnswers) {
    const dbData = readDB();
    const characters = dbData.characters;
    let evilScore = 0;
    for (let i = 0; i < newUserAnswers.length; i++) {
        if (newUserAnswers[i].answer === true) {
            evilScore += 10;
        }
    }
    for (let matchedCharacter of characters) {
        if (evilScore === matchedCharacter.evilScore) {
            return matchedCharacter;
        }
    }
}

module.exports = {
    matchUserToCharacter
}