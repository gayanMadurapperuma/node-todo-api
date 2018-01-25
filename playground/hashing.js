const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123@#';
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password,salt,(err, hash) => {
//         console.log(hash);
//     });
// });

var hashingPW = '$2a$10$83ghlaqiqoZHJcS9oDYG3Oc5J93e7J5hJCrKqzV0Uaczs4SgEHwte';
bcrypt.compare(password, hashingPW, (err,res) => {
    console.log(res);
});

/*
    JWT authenticatjon importance for identify data manupulation..
    this is some of signature.
    we use 2 function mainly JWT authentication
    jwt.sign(),
    jwt.verify(),
*/

// var message = 'this is new one for th';
// var hash = SHA256(message).toString();

// console.log(hash);

// var data = {
//     id : 12,
//     name : 'gayan madurapperuma',
//     age : '25'
// }

// var access = 'auth';
// var id = 232348028304;

// var test = {
//     _id : id.toString(16),
//     id,
//     access
// }

// return console.log(test);

// var hs = jwt.sign(data, 'sinxcosx=tanx');
// console.log(hs);

// var _decode = jwt.verify(hs,'sinxcosx=tanx');
// console.log(_decode);
