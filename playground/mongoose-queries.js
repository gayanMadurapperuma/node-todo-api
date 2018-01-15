const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

var id = '5a57ae4e816eda1650c86dfa';
var user_id = '5a57bdf724df541bcd445f3a22';

// todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todo', todo);
// },(e) => {
//     console.log(e);
// })

todo.findById(id).then((todo) => {
    if (!todo)
        return console.log('Cannot find id');
    console.log('todo ', todo);
}).catch((e) => console.log(e));

//if (!ObjectID.isValid(user_id)) return console.log('user id not valid');

user.findById(user_id).then((User) => {
    if (!User)
        return console.log('Cannot find user from database');
    console.log(User);
}).catch((e) => console.log(e));
