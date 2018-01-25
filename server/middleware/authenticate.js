var {user} = require('./../models/user');

var authenticate = (req,res,next) => {
    //This is middleware function for a '/user/me' private rount
    var token = req.header('x-auth');
    user.findByToken(token).then((user) => {
        if (!user){
            return Promise.reject();
        };
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send();
    });
};

module.exports = {authenticate};