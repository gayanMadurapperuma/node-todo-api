const mongoose = require('mongoose');
const validator = require('validator');
/* 
    user Model Structure
    email : [unique],
    password : [hash and minLength <= 6],
    tokens(Authentication method) : auth and tokens
*/

var user = mongoose.model('users', {
    email : {
        type : String,
        required : true,
        minlength : 1,
        trim : true,
        unique: true,
        //Custome validate mongoose
        validate : {
             validator : validator.isEmail,
            //(value) => {
            //     return validator.isEmail(value);
            // }
            message : '{value} is not valid email'
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
    },
    tokens : [{
        access : {
            type : String,
            required : true 
        },
        token : {
            type : String,
            required : true,
        }
    }]
});

/* 
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
*/

module.exports = {user};