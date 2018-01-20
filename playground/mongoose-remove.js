const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

//remove all
// todo.remove({}).then((res) => {
//     console.log(res);
// });

//findByIdAndremove
todo.findByIdAndRemove('5a638ff952fed9f4ab1627ea').then((todo) => {
    console.log(todo);
})