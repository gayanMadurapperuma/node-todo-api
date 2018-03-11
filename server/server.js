const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

// app.post('/todos',(req,res) => {
//     console.log(req.body);
// })
app.post('/todo', (req,res) => {
    // console.log(req.body);
    var tdo = new todo({
        text : req.body.text
    });

    tdo.save().then((docs) => {
        res.send(docs);
    },(err) => {
        console.log('Went something wrong');
    });
});

app.get('/todos', (req,res) => {
   todo.find().then((todos) => {
        res.send({
            todos
        });
   },(err) => {
       res.statusCode(400).send(err);
   });
});

app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id))
        return res.status(404).send();
    todo.findById(id).then((todo) => {
        res.send({todo});
    },(e) => res.status(400).send());
});

app.delete('/todos/:id', (req,res) => {
    var id = req.params.id;
    //return console.log(id);
    if (!ObjectID.isValid(id))
        return res.status(404).send();
    todo.findByIdAndRemove(id).then((todo) => {
        //res.send('come here');
        if (!todo)
            return res.status(400).send();
        res.send(todo);
    }).catch((e) => {
        return res.status(400).send(`error : ${e}`);
    });
});

app.patch('/todos/:id', (req,res) => {  
    var id = req.params.id;
    if (!ObjectID.isValid(id))
        return res.status(400).send();
    
    var body = _.pick(req.body, ['text', 'completed']);
    if (_.isBoolean(body.completed) && body.completed)
        body.completedAt = new Date().getTime();
    else {
        body.completed = false;
        body.completedAt = null;
    }

    todo.findByIdAndUpdate(id,{$set : body}, {new : true}).then((todo) => {
        if (!todo) 
            return res.status(404).send();
        res.send(todo);
    }).catch((err) => {
        res.status(400).send();
    });

});

app.post('/user',(req,res) => {
    var body = _.pick(req.body,['email','password']);
    var new_user = new user(body);
    new_user.save().then(() => {
        //console.log(new_user);
        return new_user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth',token).send(new_user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.post('/user/login', (req,res) => {
    var body = _.pick(req.body,['email', 'password']);
    //console.log(body.isEmpty);
    if (_.isEmpty(body)) 
        return res.status(400).send();
    user.findByCredentials(body.email,body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        res.status(400).send();
    });
});

app.get('/user/me', authenticate ,(req,res) => {
    res.send(req.user);
});

app.listen(port, () => {
    console.log(`app started on port ${port}`);
});