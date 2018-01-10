//const MongoClient = require('mongodb').MongoClient;

/*
    DECONSTRUCTOR OBJECT
var user = {name : 'gayan', age : 23};
var {name} = user;
console.log(name);

--------------------------
now can user this method above `MongoClient` Object
*/
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if (err)
        return console.log('Unable to connect mongo server');
    console.log('Successfully connected to the mongo server');
    

    // db.collection('Todos').insertOne({
    //     text : 'something to do',
    //     completed : false
    // },(err, result) => {
    //     if (err)
    //         return console.log('something went wrong', err);
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })
  //  console.log(db);

    //Insert users collections
    db.collection('Users').insertOne({
        name : 'gayan madurapperuma',
        age : 25,
        location : 'Mirigama'
    },(err, result) => {
        if (err)
           return console.log('Unable to insert data ,' , err);
        console.log(JSON.stringify(result.ops,undefined,2));
    })

    db.close();
});