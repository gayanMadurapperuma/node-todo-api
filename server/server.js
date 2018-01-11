const mongoose = require('mongoose');

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