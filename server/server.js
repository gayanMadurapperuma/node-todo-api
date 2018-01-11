const mongoose = require('mongoose');

/*
 - MongoClient have callback method, but mongoose little bit of complex
 SIMPLY : 
    mongoose not static connection to the database, if we try to execute query behind the 
    scene mongoose waiting for a connection, so that's why we use 
        @mongoose.Promise = global.Promise ,command.
    [mongoose support promise]
 */

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var todo = mongoose.model('todos',{
    text : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt : {
        type : Number,
        default : null
    }
});

var newTodo = new todo({
    text : 'learn nodejs',
    // completed : false,
    // completedAt : Date.now()
});

// newTodo.save().then((docs) => {
//     console.log('Saved success', docs);
// },(err) => {
//     console.log('Something went wrong', err);
// });

var user = mongoose.model('users', {
    name : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },
    email : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },
    password : {
        type : String,
        required : true,
        minlength : 1,
        //trim : true
    }
});

var newUser = new user({
    name : 'gayan madurapperuma',
    email : ' gayantwalight@gmail.com',
    password : 'sinxcosx=tanx'
});

newUser.save().then((docs) => {
    console.log('Saved success', docs);
}, (err) => {
    console.log('unable to save data', err);
})