const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {todo} = require('./models/todo');
const {user} = require('./models/user');

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

app.listen(3000, () => {
    console.log('app started on port 3000');
})