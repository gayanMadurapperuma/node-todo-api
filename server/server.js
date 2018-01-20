const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {todo} = require('./models/todo');
const {user} = require('./models/user');

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
        })
   },(err) => {
       res.statusCode(400).send(err);
   })
});

app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id))
        return res.status(404).send();
    todo.findById(id).then((todo) => {
        res.send({todo});
    },(e) => res.status(400).send())
})

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
    })
});

app.listen(port, () => {
    console.log(`app started on port ${port}`);
})