
// * Back-end Notes for the Starmatch App

// * Tips:
// Use VS Code Better Comments extension for better readability.
// View MVC_Design_Pattern image for a diagram to view the flow of data in the Back-end

// * Explanations for the flow for each Router and its corresponding view
// http://localhost:3000/
// ^^^^^^^^^^^^^^^^^^^^^^ This is the home page. Scrolling brings the user to view the team (admin accounts), 
// and clicking the instructions button pops up a guide for how to use the app. Also, Includes navigation to all users (the community), 
// creating a new user (create avatar), and the home/index page (home page).

// http://localhost:3000/users
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^ This is the users page. Can be navigated to from the home screen by clicking (the community). Has a list of 
// accounts with default being listed by id. The admin users have a (edit) button while the client users have both the (edit) and (delete) buttons. 
// Each user is clickable, which navigates to a view displaying that user individually.

// http://localhost:3000/users/:id
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This is the individual users page. Can be navigated to from the list of all users (the community) or by 
// entering the specific url with the associated id. By clicking (edit) the user is navigated to a view where they can edit the user
// and by clicking (delete) the user is deleted.

// http://localhost:3000/users/new
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This is the creating new users view. Includes forms and quiz involved in creating a user and
// a (create) button to send the request to the database (in our case the json file).

// * Main To-Do's:

// * Nitpicking:
// A client could manually enter the url to /delete or /edit, in which case the authentication would fail.
// After entering password the text "Enter the correct password to edit Sky" still shows up before you press the check button.

// * Extra:
// TODO: Full-Stack: When errors occur in the back-end display corresponding error page (deleting/updating admins, editing deleted users)
// TODO: Back-End: Have user input validation in the userModel.
// TODO: Display the users by evilness or goodness? Be able to toggle the way the users are displayed.
// TODO: Add listing the community by evil vs good or other metrics.
// TODO: Have list of users be publically available as an API
// TODO: Implement git version control
// TODO: Front-End: Add sound effects for button navigation
// TODO: Full-Stack: Implement delete requests to the server (Would have to make sm all changes to the html form)
// TODO: Full-Stack: Should editing a user let you change their answers to the matching questions? Would affect their results with the matching algorithm.
// TODO: Back-End: A more ideal marching algorithm each character would have predetermined "traits" and based on the answers to the questions
    // TODO: you would calculate a score that the user has for each character. This score could be called the resemblance score and the 
    // TODO: highest resemblance score would be the character that the user is assigned.
// TODO: Add functionality for admins to be able to create new characters to be added to the database and matching algorithm. Same goes for questions.
// TODO: Add functions for retrieving one character, retrieving a list of characters, and for creating a new character.
// TODO: Implement a more efficient way to interact with the database when just one user is necessary.
// TODO: Have way to restore a deleted users
// TODO: Way to actually log in and authenticate a user. The (create avatar) button would be replaced by the (my avatar) button when logged in.
// TODO: Way to do multiple matches with a single account.