// * List of Questions

// ? What is a design pattern?
// ? Is there a reason we do not just combine the indexRouter and usersRouter into one file?
// ? If we are not combining the files do we need a seperate index controller and index model? What are best practices in this case?
// ? What is a circular dependency? NodeJS seems to warn against it. We had errors regarding this when the function form the matchingAlgorithm.js file
    // ? was imported to the userModel file, while the readDB() function was imported to the matchingALgorithm file.
// ? Still unsure about using a get and post request/method in router.route("/:id"). Why not instead have to .post method in the 
    // ? ("/id:/edit") route? It seems like sending the .post request here would make more sense.
// ? When would I use delete, put, or patch requests in a real world implementation of our project? Html forms only allow .get and .post requests.