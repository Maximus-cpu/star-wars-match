# Star Wars Character Matching App

An Express.js-based web app where users answer questions to find their best-matching Star Wars fictional character.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

---

## Features
- Matches users with Star Wars characters based on their answers.
- Uses Express.js for backend logic.
- Stores data in a JSON file.

---

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Maximus-cpu/star-wars-match.git
   ```
2. Navigate to the project directory:
   ```sh
   cd StarMatchProject
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the app:
   ```sh
   node app.js
   ```

---

## Usage
1. Open `http://localhost:3000` in your browser.
2. Click the instructions button for detailed instructions.
3. Create a new avatar.
4. Answer the questions.
5. Get your character match!
6. (Enable audio for the page to listen to the music and sound effects)

---

## Project Structure
```
StarMatch/
├── app.js                      # Core application entry point
├── public/                     # Public assets
│   ├── resources/              # Static resources (images, sounds, etc.)
│   │   ├── pictures/           # Pictures categorized into themes, characters, etc.
│   │   └── soundEffects/       # Sound effects for interactive elements
│   ├── scripts/                # JavaScript for frontend interactions
│   └── styles/                 # CSS files
├── routes/                     # Route definitions
│   ├── index.js                # Home route logic
│   └── users.js                # User-related routes
├── controllers/                # Controllers for handling logic
│   └── userController.js       # Logic for managing users
├── models/                     # Data models
│   └── userModel.js            # User model with dummy JSON data
├── services/                   # Services used by the model
│   └── matchingAlgorithm.js    # Algorithm to match users to characters
├── views/                      # EJS templates for rendering HTML
│   ├── index.ejs               # Homepage view
│   ├── users.ejs               # Users list view
│   └── ...                     # Other EJS files
├── .idea/                      # IDE-specific files
├── database.json               # JSON database with user and character data
├── package.json                # Dependencies and project metadata
├── README.md                   # Documentation (this file)
└── ...                         # Additional files
```

---

## API Endpoints

### `POST /new`
- **Description**: Creates a new user.
- **Example Request Body**:
  ```json
  {
    "name": "first name",
    "surname": "last name",
    "password": "Password!!!",
    "evilness-question-1": "on",
    "evilness-question-3": "on",
    "evilness-question-5": "on",
    "evilness-question-7": "on",
    "evilness-question-9": "on"
  }
  ```
- **Example Response Body**:
  ```json
  {
    "id": 8,
    "name": "first name",
    "surname": "last name",
    "role": "client",
    "matchedCharacter": {
      "id": 1,
      "name": "Jar Jar",
      "surname": "Binks",
      "title": "Darth Jar Jar",
      "picture": "/resources/pictures/characters/darth-jar-jar.jpg",
      "evilScore": 50,
      "side": "dark"
    },
    "password": "Testing!!!",
    "deleted": false
  }
  ```

### `POST /delete`
- **Description**: Deletes a user.
- **Example Request Body**:
  ```json
  {
    "id": 8
  }
  ```
- **Response**:
  - On success: Redirected to `/users`
  - If user not found: Returns "User not found"
  - If attempting to delete an admin: Redirected to `errorView`

### `POST /edit`
- **Description**: Edits a user.
- **Example Request Body**:
  ```json
  {
    "id": 6,
    "name": "Sky",
    "surname": "Morales",
    "role": "client",
    "matchedCharacter": {
      "id": 5,
      "name": "Obi Wan",
      "surname": "Kenobi",
      "title": "Jedi Master",
      "picture": "/resources/pictures/characters/obi-wan-kenobi.jpg",
      "evilScore": 10,
      "side": "good"
    },
    "password": "Testing!!!",
    "deleted": false
  }
  ```

---

## Technologies Used
- Node.js
- Express.js
- JSON for storage

---

## License
This project is licensed under the MIT License.

---

## Contact
Created by **Anna Menzel, Denis Vasilev, Aidan Ryan, Florian Köhl**

If any problems encountered contact us at aidanryandunn@gmail.com

Remote Repository: [GitHub Repo](https://github.com/Maximus-cpu/star-wars-match/tree/main)
