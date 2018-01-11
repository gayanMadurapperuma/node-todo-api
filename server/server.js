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
        type : String
    },
    completed : {
        type : Boolean
    },
    completedAt : {
        type : Number
    }
});

var newTodo = new todo({
    text : 'learn nodejs',
    completed : false,
    completedAt : Date.now()
});

newTodo.save().then((docs) => {
    console.log('Saved success', docs);
},(err) => {
    console.log('Something went wrong', err);
})