//<3 <3 <3 heart of our app <3 <3 <3

// import express routing framework
const express = require("express");

// import path module for dynamically getting the path to resources
const path = require("path");

// import cors and file upload modules
const cors = require("cors");
const fileUpload = require("express-fileupload");

// importing the users and index routers
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
// import body parser to understand the data that comes in (node.js module)
const bodyParser = require('body-parser');

// initialize express - app is a new instance of express
const app = express();
// set port 3000 - default port for node.js
const port = 3000;

// set the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view options', { debug: false }); // Can enable this if we need to debug ejs templates

//some files we want to have publicly available (saved in the public folder)
//express.static -> for public access of the public folder
app.use(express.static(path.join(__dirname, 'public')));

//to be able to receive data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload({createPath: true}));

// attach the paths to the corresponding routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch any unwanted paths and displaying the error page
app.use((req, res) => {
    res.status(404).render('error', { message: 'Error 404 - Page not found.' });
});

//listen to the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});