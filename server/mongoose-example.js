const mongoose = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const todo = require('./models/todo');
const user = require('./models/user');
/*
 - MongoClient have callback method, but mongoose little bit of complex
 SIMPLY : 
    mongoose not static connection to the database, if we try to execute query behind the 
    scene mongoose waiting for a connection, so that's why we use 
        @mongoose.Promise = global.Promise ,command.
    [mongoose support promise]
 */
// var newTodo = new todo({
//     text : 'learn nodejs',
//     // completed : false,
//     // completedAt : Date.now()
// });

// newTodo.save().then((docs) => {
//     console.log('Saved success', docs);
// },(err) => {
//     console.log('Something went wrong', err);
// });

// var newUser = new user({
//     name : 'gayan madurapperuma',
//     email : ' gayantwalight@gmail.com',
//     password : 'sinxcosx=tanx'
// });

// newUser.save().then((docs) => {
//     console.log('Saved success', docs);
// }, (err) => {
//     console.log('unable to save data', err);
// })