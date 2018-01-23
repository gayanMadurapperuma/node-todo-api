const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

/* 
    user Model Structure
    email : [unique],
    password : [hash and minLength <= 6],
    tokens(Authentication method) : auth and tokens
*/

var userSchema = new mongoose.Schema({
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
},{ 
    usePushEach : true
});

/*
    userSchema.method is object, so can add any mathod I like.i[nstanse mathod..]
*/
userSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    //jwt secrat value normally get FROM CONFIGURATION VARIABLE
    var token = jwt.sign({_id : user._id.toHexString(), access},'sinxcosx');
    console.log(token);
    user.tokens.push({access,token});
    //console.log(user.tokens);
    return user.save().then(() => {
        return token;
    });
}

var user = mongoose.model('users', userSchema);

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